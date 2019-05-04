import React from 'react';


function Container(props) {
    return (
        <div className="container w-75">
            {props.children}
        </div>
    )
}

export default Container;