import React from 'react';
import championships from '../img/championships.pdf';

class Archive extends React.Component {
    static defaultProps = {
        archives: [
            {
                name: 'Hoot Art Gallery',
                imageClass: 'archive-hoot-art',
                link: 'http://1-2-3-4.github.io/demos/hootartgallery/index.html',
                description: 'Design and Development for a New Mexico gallery website.',
                tags: ['HTML', 'CSS', 'JS', 'PHP', 'Flex Box', 'Design', 'Responsive', 'Logo Design'],
                view: 'Demo'
            },
            {
                name: 'Email Sign-up Pop-ups - Macmillan',
                imageClass: 'archive-email-popup',
                link: 'http://1-2-3-4.github.io/demos/email-popup.html',
                description: 'Design and development for email sign-up forms on the US Macmillan corporate site by genre. All sensitive data and back-end functionality has been removed from the Demo.',
                tags: ['HTML', 'CSS', 'JS', 'Flex Box', 'Design', 'Responsive'],
                view: 'Demo'
            },
            {
                name: '2015 Holiday Gift Guide - Macmillan',
                imageClass: 'archive-holiday-landing-pg',
                link: 'http://us.macmillan.com/static/2015holidaygiftguide/',
                description: 'Landing Page for Macmillan\'s 2015 Holiday Gift Guide. Long scroll style page organized by book category.',
                tags: ['HTML', 'CSS', 'JS', 'Design', 'SVG', 'Responsive', 'Illustration'],
                view: 'Live'
            },
            {
                name: 'Internal Tool Redesign - Macmillan',
                imageClass: 'archive-formtool',
                link: 'http://1-2-3-4.github.io/demos/form-homepg.html',
                description: 'Redesign of an internal marketing tool used to generate email sign-up forms, legal language for sweepstakes, Google Analytics event tracking, etc. Waterflow workflow with back-end developer working in ASP.NET. All sensitive data and back-end functionality has been removed from the Demo.',
                tags: ['HTML', 'CSS', 'JS', 'Design', 'Flex Box', 'Prototype'],
                view: 'Demo'
            },
            {
                name: 'Championship Site - Twenty Sided Store',
                imageClass: 'archive-championships',
                link: championships,
                description: 'Design for Championship Tournament site at Twenty Sided Store in Brooklyn.',
                tags: ['Design', 'Illustration'],
                view: 'PDF'
            },
        ]
    };

    render() {
        const { archives } = this.props;
        return (
            <div className="main archives">
                {
                    archives.map((archive, index) => {
                        return (
                            <section className="archive clearfix" key={ index }>
                                <h2 key={ `h2-${index}` }>{ archive.name }</h2>
                                <div className={`archive-img-container ${archive.imageClass}`} key={ `img-container-${index}` }></div>
                                <div className="archive-desc-container" key={ `desc-${index}` }>
                                    <p key={ `p-${index}` }>{ archive.description }</p>
                                    <a className="view-archive" href={ archive.link } target="_blank" key={ `btn-${index}` }>View { archive.view }</a>
                                    {
                                        archive.tags.map((tagName, index) => {
                                            return <span className="tag" key={ `tag-${index}` }>{ tagName }</span>
                                        })
                                    }
                                </div>
                            </section>
                        )
                    })
                }
            </div>
        )
    }
}

export default Archive;