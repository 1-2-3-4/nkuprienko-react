import React from 'react';
import Envelope from '../img/envelope.svg';

class Contact extends React.Component {
    render() {
        const { externalLinks } = this.props;
        return (
            <div className="main contact">
                <section className="contact-section clearfix">
                    
                    <div className="contact-img-container">
                        <Envelope className="envelope" />
                    </div>
                    <div className="contact-text-container">
                        <h2>Contact</h2>
                        <ul className="contact-list">
                            <li>nicole.kuprienko@gmail.com</li>
                            {
                                externalLinks.map((contact, index) => {
                                    return (
                                        <li key={ index }>
                                            <a href={ contact.link } target="_blank" key={ index }>
                                                <i className={ `fa fa-${contact.iconClass}` } key={ index }></i>&nbsp;&nbsp;{ contact.displayName }
                                            </a>
                                        </li>
                                    )
                                })
                            }
                        </ul>
                    </div>
                </section>
            </div>
        )
    }
}

export default Contact;