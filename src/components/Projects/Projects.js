import React, {Component} from 'react';
import './Projects.css';

class Projects extends Component {
    constructor() {
        super()
        this.state = {
            name: "Projects"
        }
    }
    render() {

        return(
            <div className='Projects'>Projects</div>
        )
    }
}

export default Projects;