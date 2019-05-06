import React from 'react';
import "./Container.css";


function Container(props) {
    return (
        <div className="container w-75">
            {props.children}
        </div>
    )
}

export default Container;