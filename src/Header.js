import React from 'react';
import Logo from './img/me.svg';

class Header extends React.Component {
    render() {
        return (
            <header>
                <h1>Nicole Kuprienko</h1>
                <h2>Front-End Development</h2>
                <Logo id="me" />
            </header>
        )
    }
}

export default Header;