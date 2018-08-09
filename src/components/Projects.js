import React from 'react';
import Chatbot from './Chatbot';
import Tictactoe from './Tictactoe';

class Projects extends React.Component {

    render() {
        return (
                <div className="main projects">
                    <section className="projects-section">
                        <h2>Guessing Game</h2>
                        <div className="projects-container">
                            <Chatbot />
                        </div>
                    </section>
                    <section className="projects-section">
                        <h2>Tic Tac Toe</h2>
                        <div className="projects-container">
                            <Tictactoe />
                        </div>
                    </section>
                </div>
        )
    }
}

export default Projects;