import {
    CHANGE_SEARCH_TEXT,
    REQUEST_ROBOTS_FAILED,
    REQUEST_ROBOTS_SUCCESS,
    REQUEST_ROBOTS_PENDING
} from './constants';

export const setSearchText = (text) => ({
    type: CHANGE_SEARCH_TEXT,
    payload: text
})

export const requestRobots = () =>  (dispatch) => {
    dispatch({type: REQUEST_ROBOTS_PENDING});
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(respons=> respons.json())
    .then(data => dispatch({type: REQUEST_ROBOTS_SUCCESS,payload: data}))
    .catch(error => dispatch({type: REQUEST_ROBOTS_FAILED, payload: error}))
}