import React from 'react';

class Footer extends React.Component {

    render() {
        const { externalLinks } = this.props;
        return (
            <footer>
                <p>&copy; Nicole Kuprienko 2018</p>
                <ul>
                    {
                        externalLinks.map((footer, index) => {
                            return (
                                <li key={ index }>
                                    <a href={footer.link} target="_blank" key={ index }>
                                        <i className={`fa fa-${footer.iconClass}`} key={ index }></i>
                                    </a>
                                </li>
                            )
                        })
                    }
                </ul>
            </footer>
        )
    }
}

export default Footer;