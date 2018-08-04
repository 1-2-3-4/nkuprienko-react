import React from 'react';

class Nav extends React.Component {
    static defaultProps = {
        navLinks: [
            {
                displayName: 'projects',
                link: '/projects'
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
        return (
            <nav>
                <ul>
                    {
                        navLinks.map((nav, index) => {
                            const active = this.state.pathname === nav.link ? ' active' : '';
                            return (
                                <li key={ index }>
                                    <a 
                                        className={ `${nav.displayName}-link ${active}` } 
                                        href={ nav.link }
                                        key={ index }
                                        onClick={ () => this.setState({ activeLink: nav.displayName }) }
                                    >
                                        { nav.displayName }
                                    </a>
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