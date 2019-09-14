import React from 'react';


export const Scroll = (props) =>{
    return (
        <div style={{overflowY:'scroll', height: '75vh'}}>
            {props.children}
        </div>
    )
}
