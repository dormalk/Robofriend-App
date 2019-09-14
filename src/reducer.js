import {
    CHANGE_SEARCH_TEXT,
    REQUEST_ROBOTS_FAILED,
    REQUEST_ROBOTS_SUCCESS,
    REQUEST_ROBOTS_PENDING
} from './constants';

const INITIAL_STATE_SEARCH = {
    searchField:''
}

const INITIAL_STATE_ROBOTS = {
    isPanding: false,
    robots: [],
    error: ''
}


export const searchRobots = (state=INITIAL_STATE_SEARCH,action={}) => {
    switch(action.type){
        case CHANGE_SEARCH_TEXT:
            return{
                ...state,
                searchField: action.payload
            }
        default:
            return {
                ...state
            }
    }   
}


export const requestRobots = (state=INITIAL_STATE_ROBOTS, action={}) => {
    switch(action.type){
        case REQUEST_ROBOTS_PENDING:
            return{
                ...state,
                isPanding: true
            }
        case REQUEST_ROBOTS_SUCCESS:
            return{
                ...state,
                robots: action.payload,
                isPanding: false
            }
        case REQUEST_ROBOTS_FAILED:
            return {
                ...state,
                error: action.payload,
                isPanding: false
            }
        default:
            return {...state}
        
    }
}
