import React from 'react';
import './Card.css'

function Card(props) {
    return (
        <div className=" col-sm-3">
            <img className=" .img-fluid memory-pic shadow"
            src={props.src}
            alt="random_image"
            index={props.index}
            {...props}  />
        </div>
    )
}

export default Card;