import React from 'react';

function Header(props) {
    return (
        <div className="jumbotron m-0 p-1">
            <h1 className="display-3 text-center">Welcome to the Clicky Memory Game!</h1>
            <p className= "h4 text-center">Try to click all the images without selecting a duplicate!</p>
        </div>
    );
};

export default Header;