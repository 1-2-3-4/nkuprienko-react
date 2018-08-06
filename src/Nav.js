import React from 'react';
import { Link } from 'react-router-dom'

class Nav extends React.Component {
    static defaultProps = {
        navLinks: [
            {
                displayName: 'projects',
                link: '/projects',
                altLink: '/'
            },
            {
                displayName: 'archive',
                link: '/archive'
            },
            {
                displayName: 'contact',
                link: '/contact'
            }
        ]
    }

    constructor(props) {
        super(props);
        // set initial active link to first link in props array
        this.state = { pathname: window.location.pathname };
    }

    render() {
        const { navLinks } = this.props;
        const { pathname } = this.state;
        return (
            <nav>
                <ul>
                    {
                        navLinks.map((nav, index) => {
                            const active = pathname === nav.link || pathname === nav.altLink ? ' active' : '';
                            return (
                                <li key={ index }>
                                    <Link 
                                        className={ `${nav.displayName}-link ${active}` } 
                                        to={ nav.link }
                                        key={ index }
                                        onClick={ () => this.setState({ activeLink: nav.displayName }) }
                                    >
                                        { nav.displayName }
                                    </Link>
                                </li>
                            )
                        })
                    }
                </ul>
            </nav>
        )
    }
}

export default Nav;