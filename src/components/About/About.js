import React, { Component } from 'react';
import './About.css';
import resume from '../../assets/resume.pdf'
import profile from "../../assets/profile.jpg"

class About extends Component {
    render() {
        return (
            <div className='About'>

                <img className="bio-img" src={profile} alt="Profile" />

                <h1>Taylor Sam</h1>
                <h2>Web Developer</h2>
                <p className="bio-description">
                    After attending DevMountain and earning a certificate in
                    JavaScript Web Development, tech has become one of my passions.
                    I love learning new things and living everyday to the fullest of my ability.
                    In my free time, I enjoy writing and playing music, exploring
                    the city, and going on hikes in the wilderness.
                    Please exlpore my portfolio!
                </p>
                <a href={resume} style={{ textDecoration: "none" }} target="blank"><div className="button">View Resume</div></a>

            </div>
        )
    }
}

export default About;