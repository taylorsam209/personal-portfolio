import React, { Component } from 'react';
import './About.css';

class About extends Component {
    render() {
        return (
            <div className='About'>
                <div className="bio-img-container" >
                    <img className="bio-img" src="https://source.unsplash.com/random/" alt="Random" />
                </div>
                <h1>Taylor Sam</h1>
                <h2>Web Developer</h2>
                <p className="bio-description"> Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                    sed do eiusmod tempor incididunt ut labore et dolore magna a
                    liqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
                    laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure do
                    lor in reprehenderi
                </p>

            </div>
        )
    }
}

export default About;