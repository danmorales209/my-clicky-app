import React from 'react';
import './Card.css'

function Card(props) {
    return (
        <div className=" col-xl-2 col-lg-3 col-md-4 col-sm-6 col-12">
            <img className=" .img-fluid memory-pic shadow"
            src={props.src}
            alt="random_image"
            index={props.index}
            {...props}  />
        </div>
    )
}

export default Card;