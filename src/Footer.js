import React from 'react';

class Footer extends React.Component {

    constructor(props) {
        super(props);

        this.props = {
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
    }

    createIconLink(link, iconClass) {
        return (
            <li>
                <a href={link} target="_blank">
                    <i className={`fa fa-${iconClass}`}></i>
                </a>
            </li>
        )
    }

    render() {
        const { footerLinks } = this.props;
        return (
            <footer>
                <p>&copy; Nicole Kuprienko 2018</p>
                <ul>
                    {
                        footerLinks.map((footer, index) => {
                            return this.createIconLink(footer.link, footer.iconClass);
                        })
                    }
                </ul>
            </footer>
        )
    }
}

export default Footer;