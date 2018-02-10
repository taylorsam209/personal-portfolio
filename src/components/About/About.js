import React, { Component } from 'react';
import './About.css';
import resume from '../../assets/resume.pdf'

class About extends Component {
    render() {
        return (
            <div className='About'>
                <div className="bio-img-container" >
                    <img className="bio-img" src="https://source.unsplash.com/random/" alt="Random" />
                </div>
                <h1>Taylor Sam</h1>
                <h2>Web Developer</h2>
                <p className="bio-description"> I graduated from DevMountain. </p>
                <a href={resume} style={{ textDecoration: "none" }} target="blank"><div className="button">See My Resume</div></a>

            </div>
        )
    }
}

export default About;