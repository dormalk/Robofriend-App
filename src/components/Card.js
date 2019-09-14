import React from 'react';

export const Card = (props) =>{
    const {imageStyle} = styles;
    const {id,name,email} = props;
    return(
        <div className="bg-light-red dib br3 pa3 ma2 grow shadow-1-ns">
            <img style={imageStyle} alt="robot" src={`https://robohash.org/${id}?size=200x200`}/>
            <div>
                <h2>{name}</h2>
                <p>{email}</p>
            </div>
        </div>
    )
}

const styles={
    imageStyle:{
        width:'150px',
        height:'150px'
    }
}