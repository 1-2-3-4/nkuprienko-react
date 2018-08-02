import React from 'react';

class Footer extends React.Component {

    static defaultProps = {
        footerLinks: [
            {
                link: "http://codepen.io/nicode/",
                iconClass: "codepen"
            },
            {
                link: "https://github.com/1-2-3-4",
                iconClass: "github"
            },
            {
                link: "https://www.linkedin.com/in/nicole-kuprienko-3954b760",
                iconClass: "linkedin"
            }
        ]
    }

    render() {
        const { footerLinks } = this.props;
        return (
            <footer>
                <p>&copy; Nicole Kuprienko 2018</p>
                <ul>
                    {
                        footerLinks.map((footer, index) => {
                            return (
                                <li>
                                    <a href={footer.link} target="_blank">
                                        <i className={`fa fa-${footer.iconClass}`}></i>
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