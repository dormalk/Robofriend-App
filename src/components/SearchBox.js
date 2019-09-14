import React from 'react';

export const SearchBox = ({searchField,searchChange}) => {
    return(
        <input
            aria-label="Search Robots"
            className="pa2 ba b--red bg-light-yellow" 
            type="search" 
            placeholder="Search Robots"
            onChange={searchChange}/>
    )
}

