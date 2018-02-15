import React, { Component } from 'react';
import './Projects.css';
import 'font-awesome/css/font-awesome.min.css';
import closiiMusic from "../../assets/closiimusic.PNG";
import veganEats from "../../assets/veganeats.PNG";
import trippin from "../../assets/trippin.PNG";

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
                <h1>Projects</h1>
                <div className="flexbox-wrap">
                    <div className="work-container closii-music">
                        <h2>Closii Music</h2>
                        <div className="img-container" >
                            <img src={closiiMusic} alt="closii music" />
                        </div>
                        <p>Closii Music is an artist portfolio developed for local Sacramento, CA 
                            based rapper Carlos Perez aka Closii to showcase his musical work.</p>
                        <h3>Technology Used</h3>
                        <p className="tech-description">Frontend built with ReactJS focusing on mobile design implementing
                            CSS Grid. Stripe Checkout boilerplate is a payment feature running on server 
                            side with NodeJS to allow users to donate money in support of music.
                    </p>
                        <a href="http://closiimusic.com" style={{ textDecoration: "none" }} target="blank"><div className="button">Website</div></a>
                        <a href="https://github.com/taylorsam209/closii-artist-portfolio" style={{ textDecoration: "none" }} target="blank">
                            <div className="button span"><i className="fab fa-github"></i> GitHub</div></a>
                    </div>

                    <div className="work-container vegan-eats">
                        <h2>Vegan Eats</h2>
                        <div className="img-container" >
                            <img src={veganEats} alt="vegan eats" />
                        </div>
                        <p>Vegan Eats allows users to search for vegan and vegetarian friendly
                            resources by location and save favorite businesses to their profile.
                                </p>
                        <h3>Technology Used</h3>
                        <p className="tech-description">Built server side code to communicate with Yelp API using RESTful 
                            requests to pull JSON data about vegan businesses. Users can login with
                            Auth0, an authentication library written with NodeJS and express.
                    </p>
                        <a href="http://veganeats.life" style={{ textDecoration: "none" }} target="blank"><div className="button">Website</div></a>
                        <a href="https://github.com/taylorsam209/personal-project" style={{ textDecoration: "none" }} target="blank">
                            <div className="button span"><i className="fab fa-github"></i> GitHub</div></a>
                    </div>

                    <div className="work-container trippin-online">
                        <h2>Trippin</h2>
                        <div className="img-container">
                            <img src={trippin} alt="trippin" />
                        </div>
                        <p> Trippin is a mobile view application that allows users to create 
                            trip events such as flights for easy trip planning with friends and families.</p>
                        <h3>Technology Used</h3>
                        <p className="tech-description">Implemented components from Material-UI library to build frontend pages.
                           Used Redux for state management allowing components access to data throughout application. Unit tests 
                            written in Postman to test endpoints for APIs and PostgreSQL database.
                    </p>
                        <a href="http://trippinonline.com" style={{ textDecoration: "none" }} target="blank"><div className="button">Website</div></a>
                        <a href="https://github.com/Vacation-Application/vacation" style={{ textDecoration: "none" }} target="blank">
                            <div className="button span"><i className="fab fa-github"></i> GitHub</div></a>
                    </div>
                </div>

            </div>
        )
    }
}

export default Projects;