import React from 'react';
import "./Nav.css";
import Header from "./Header"

function Nav(props) {
    return (
        <div className="navWrapper">
        <Header/>
            <nav className="navbar navbar-success flex-row justify-content-center d-flex">
                <p id="score" className="nav-item m-2 d-flex h4 " href="#" >Current Score: {props.currentScore}</p>
                <p id="highScore" className="nav-item m-2 d-flex h4 " href="#">High Score: {props.highScore}</p>
            </nav>
        </div>
    );
}

export default Nav;