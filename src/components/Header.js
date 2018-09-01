import React, { Component } from 'react';

class Header extends Component {
    render() {
        return (
            <div className={'wrapper'}>
                <h1>Find A Superhero!</h1>
                <h3>Enter a superhero's name (or villian) below to get their information back.</h3>
            </div>
        )
    }
}

export default Header;