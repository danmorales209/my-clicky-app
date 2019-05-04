import React from 'react';
import './Card.css'

function Card(props) {
    return (
        <div className=" col-sm-3">
            <img className=" .img-fluid memory-pic shadow" src="https://picsum.photos/200/200" alt="random_image" />
        </div>
    )
}

export default Card;