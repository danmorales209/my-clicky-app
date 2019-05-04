import React from 'react';
import Card from './Card';

function Row(props) {
    
    let cards = [];

    for (let i = 0; i < 12; i ++) {
        cards.push(i+1);
    }
    
    return (
        <div className="row">
            {cards.map(x => <Card stuff={x} />)}
        </div>
    )
}

export default Row;