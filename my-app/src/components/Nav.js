import React from 'react';
import "./Nav.css";

function Nav(props) {
    return (
        <>
            <nav className="navbar navbar-success flex-row justify-content-center d-flex">
                <p id="score" className="nav-item m-2 d-flex h4 " href="#" >Current Score: {props.currentScore}</p>
                <p id="highScore" className="nav-item m-2 d-flex h4 " href="#">High Score: {props.highScore}</p>
            </nav>
        </>
    );
}

export default Nav;