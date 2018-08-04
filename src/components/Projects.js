import React from 'react';
import Chatbot from './Chatbot';
import Tictactoe from './Tictactoe';

class Projects extends React.Component {
    static defaultProps = {
        projects: [
            {
                name: 'Guessing Game',
                component: 'Chatbot',
                //link: 'http://codepen.io/nicode/pen/rxvwJL'
            },
            {
                name: 'Tic Tac Toe',
                component: 'Tictactoe',
                //link: 'http://codepen.io/nicode/pen/EPpmZp'
            }
        ]
    }

    render() {
        return (
                <div className="main projects">
                    <section className="projects-section">
                        <h2>Guessing Game</h2>
                        <div className="projects-container">
                            <Chatbot />
                        </div>
                    </section>
                </div>
        )
    }
}

export default Projects;