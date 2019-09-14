import React from 'react';
import { CardList, SearchBox, Scroll, ErrorBoundry, Header } from './components';
import {connect} from 'react-redux';
import { Spinner } from 'react-bootstrap'
import { setSearchText,requestRobots } from './actions';


class App extends React.Component{

  componentDidMount(){
    this.props.onRequestRobots();
  }

  renderList(){
    const {robots,isPanding} = this.props;
    const filterdRobot = robots.filter(robot => {
      return robot.name.toLowerCase().includes(this.props.searchField.toLowerCase())
    })

    if(isPanding){
      return <Spinner 
        animation="border" 
        variant="primary" />
    }
    else{
      return <CardList robots={filterdRobot}/>
    }
  }

  render(){
    const {onSearchChange, searchField} = this.props;
    return(
      <div className="tc">
        <Header/>
        <SearchBox 
          searchChange={onSearchChange.bind(this)}
          searchField={searchField}/>
        <hr/>
        <Scroll>
          <ErrorBoundry>
            {this.renderList()}
          </ErrorBoundry>
        </Scroll>
        </div>

      )
  }
}


const mapStateToProps = state => {
  const {searchField} = state.searchRobots;
  const {robots,isPanding,error} = state.requestRobots;
  return{
    searchField,
    robots,
    isPanding,
    error
  }
}

const mapDispatchToProp = (dispatch) => {
  return{
    onSearchChange: (event) => dispatch(setSearchText(event.target.value)),
    onRequestRobots: () => dispatch(requestRobots())
  }
}

export default connect(mapStateToProps,mapDispatchToProp)(App);
