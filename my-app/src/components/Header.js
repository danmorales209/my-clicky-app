import React from 'react';
import "./Header.css";

function Header() {
    return (
        <div className="jumbotron-fluid m-0 p-1">
            <h1 className="h4 text-center">Welcome to the Clicky Memory Game!</h1>
            <p className= "h4 text-center">Try to click all the images without selecting a duplicate!</p>
        </div>
    );
};

export default Header;