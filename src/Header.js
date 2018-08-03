import React from 'react';
import logo from './img/me.svg';

class Header extends React.Component {
    render() {
        return (
            <header>
                <h1>Nicole Kuprienko</h1>
                <h2>Front-End Development</h2>
                <img id="me" src={ logo } alt="selfie" />
            </header>
        )
    }
}

export default Header;