import React from 'react';
import Chatbot from './Chatbot';

class Projects extends React.Component {
    render() {
        return (
                <div className="main projects">
                    <section className="projects-section">
                        <h2>Guessing Game</h2>
                        <div className="projects-container">
                            <Chatbot />
                        </div>
                        <a className="projects-external-link" href="http://codepen.io/nicode/pen/rxvwJL" target="_blank"><i className="fa fa-codepen"></i>&nbsp;View on CodePen</a>
                    </section>
                    <section className="fun-section">
                        <h2>Tic Tac Toe</h2>
                        <div className="fun-container">
                            
                        </div>
                        <a className="fun-external-link" href="http://codepen.io/nicode/pen/EPpmZp" target="_blank"><i className="fa fa-codepen"></i>&nbsp;View on CodePen</a>
                    </section>

                </div>
        )
    }
}

export default Projects;