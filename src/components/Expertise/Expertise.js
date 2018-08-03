import React, { Component } from 'react';
import './Expertise.css';
import 'font-awesome/css/font-awesome.min.css';

class Expertise extends Component {
    render() {
        return (
            <div className='Expertise'>
                <h1>Expertise</h1>
                <div className="sub-header">My Development Chops</div>
                <ul className="tech-container">
                    <li><i className="fab fa-js-square fa-2x"></i> ES6 JavaScript</li>
                    <li><i className="fab fa-html5 fa-2x"></i> HTML5</li>
                    <li><i className="fab fa-css3-alt fa-2x"></i> CSS3</li>
                    <li><i className="fab fa-react fa-2x"></i> ReactJS with Redux</li>
                    <li><i className="fab fa-node-js fa-2x"></i> Express</li>
                    <li><i className="fab fa-node fa-2x"></i> NodeJS</li>
                    <li><i className="fab fa-react fa-2x"></i> React Native</li>
                    <li><i className="fas fa-database fa-2x"></i> PostgreSQL</li>
                    <li><i className="fas fa-cloud-upload-alt fa-2x"></i> RESTful APIs</li>
                    <li><i className="fab fa-git fa-2x"></i> Git Version Control</li>
                    <li><i className="fab fa-sass fa-2x"></i> SASS Styling</li>
                    <li><i className="fas fa-code fa-2x"></i> Test Driven Development</li>
                </ul>
            </div>
        )
    }
}

export default Expertise;