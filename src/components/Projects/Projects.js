import React, { Component } from 'react';
import './Projects.css';

class Projects extends Component {
    constructor() {
        super()
        this.state = {
            name: "Projects"
        }
    }
    render() {

        return (
            <div className='Projects'>
                <h1>Work</h1>
                <div className="work-container">
                <h2>Closii Music</h2>
                
                </div>

            </div>
        )
    }
}

export default Projects;