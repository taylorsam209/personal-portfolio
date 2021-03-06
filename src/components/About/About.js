import React, { Component } from 'react';
import './About.css';
import resume from '../../assets/resume.pdf'
import {Parallax} from 'react-parallax';
import profile from "../../assets/profile.jpg";
import galaxy from '../../assets/galaxy.jpg'

class About extends Component {
    render() {
        return (
            // <div className='About'>
                <Parallax className='About'
                bgImage={galaxy}
                strength={230}
                >
                <img className="bio-img" src={profile} alt="Profile" />

                <h1>Taylor Sam</h1>
                <h2>Fullstack Developer</h2>
                <p className="bio-description">
                    Technology has been one of my biggest passions and I am always excited about the latest innovations.
                    I love learning new things and living everyday to the fullest of my ability.
                    In my free time, I enjoy writing and playing music, exploring
                    the city, and going on hikes in the wilderness.
                    Please exlpore my portfolio!
                </p>
                {/* <a href={resume} style={{ textDecoration: "none" }} target="blank"><div className="button">View Resume</div></a> */}
                </Parallax>

            // </div>
        )
    }
}

export default About;