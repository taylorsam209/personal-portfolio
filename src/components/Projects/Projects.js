import React, { Component } from 'react';
import './Projects.css';
import 'font-awesome/css/font-awesome.min.css';

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
                <div className="work-container closii-music">
                    <h2>Closii Music</h2>
                    <img src="https://source.unsplash.com/random/" alt="closii music" />
                    <p>• A fullstack project that allows users to search for vegan and vegetarian friendly resources by location.
                        Search results include restaurants, grocery stores, and farmers markets.
                        • Users can login with Auth0 and save their favorite businesses which can be viewed in their profile.</p>
                    <h3>Technical Usage</h3>
                    <p>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididu
                        nt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliqu</p>
                        <a href="http://closiimusic.com" style={{ textDecoration: "none" }} target="blank"><div className="button">Website</div></a>
                        <a href="https://github.com/taylorsam209/closii-artist-portfolio" style={{ textDecoration: "none" }} target="blank">
                        <div className="button"><i className="fab fa-github"></i> GitHub</div></a>
                </div>

                <div className="work-container vegan-eats">
                    <h2>Vegan Eats</h2>
                    <img src="https://source.unsplash.com/random/" alt="closii music" />
                    <p>• A fullstack project that allows users to search for vegan and vegetarian friendly resources by location.
                        • Search results include restaurants, grocery stores, and farmers markets.
                        • Users can login with Auth0 and save their favorite businesses which can be viewed in their profile.</p>
                    <h3>Technology Used</h3>
                    <p>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididu
                        nt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliqu</p>
                        <a href="http://veganeats.life" style={{ textDecoration: "none" }} target="blank"><div className="button">Website</div></a>
                        <a href="https://github.com/taylorsam209/personal-project" style={{ textDecoration: "none" }} target="blank">
                        <div className="button"><i className="fab fa-github"></i> GitHub</div></a>
                </div>

                <div className="work-container trippin-online">
                    <h2>Trippin Online</h2>
                    <img src="https://source.unsplash.com/random/" alt="closii music" />
                    <p>• A fullstack project that allows users to search for vegan and vegetarian friendly resources by location.
                        • Search results include restaurants, grocery stores, and farmers markets.
                        • Users can login with Auth0 and save their favorite businesses which can be viewed in their profile.</p>
                    <h3>Technology Used</h3>
                    <p>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididu
                        nt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliqu</p>
                        <a href="http://trippinonline.com" style={{ textDecoration: "none" }} target="blank"><div className="button">Launch</div></a>
                        <a href="https://github.com/Vacation-Application/vacation" style={{ textDecoration: "none" }} target="blank">
                        <div className="button"><i className="fab fa-github"></i> GitHub</div></a>
                </div>

            </div>
        )
    }
}

export default Projects;