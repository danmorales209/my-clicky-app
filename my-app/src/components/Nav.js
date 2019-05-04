import React from 'react';

function Nav(props) {
    return (
        <>
            <nav className = "navbar navbar-success bg-danger flex-row justify-content-center d-flex">
                <a className ="navbar-brand text-light " href="#">The Clicky Game</a>
                <div className = "nav-item m-1 d-flex" >Current Score: {props.currentScore}</div>
                <div className = "nav-item m-1 d-flex" >High Score: {props.highScore}</div>
            </nav>
        </>
    );
}

export default Nav;