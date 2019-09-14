import React from 'react';
import {Card} from './Card';

export const CardList = ({robots},props) => {
    const cardComponent = robots.map(robot => {
        return <Card key={robot.id} {...robot}/>
    })
    return(
        <div>
            {cardComponent}
        </div>
    )
}
