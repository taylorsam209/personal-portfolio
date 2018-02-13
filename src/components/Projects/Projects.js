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
                <h1>Work</h1>
                <div className="work-container closii-music">
                    <h2>Closii Music</h2>
                    <img src={closiiMusic} alt="closii music" />
                    <p>Musician artist portfolio made for Sacramento, CA based rapper Carlos Perez aka Closii.</p>
                    <h3>Technology Used</h3>
                    <p>• Frontend built with ReactJS focusing on mobile responsive design implementing CSS Grid.
• Stripe Checkout boilerplate running on server side with NodeJS to enable donation payment feature.
</p>
                        <a href="http://closiimusic.com" style={{ textDecoration: "none" }} target="blank"><div className="button">Website</div></a>
                        <a href="https://github.com/taylorsam209/closii-artist-portfolio" style={{ textDecoration: "none" }} target="blank">
                        <div className="button"><i className="fab fa-github"></i> GitHub</div></a>
                </div>

                <div className="work-container vegan-eats">
                    <h2>Vegan Eats</h2>
                    <img src={veganEats} alt="vegan eats" />
                    <p>A single page application that allows users to search for vegan and vegetarian friendly resources by location.
                        Search results include restaurants, grocery stores, and farmers markets.
                        Users can login with Auth0 and save their favorite businesses which can be viewed in their profile.</p>
                    <h3>Technology Used</h3>
                    <p>• Built server side code to communicate with Yelp API using RESTful requests to pull JSON data about vegan businesses.
                        • Users can login with Auth0, an authentication library written with NodeJS and express.
                    </p>
                        <a href="http://veganeats.life" style={{ textDecoration: "none" }} target="blank"><div className="button">Website</div></a>
                        <a href="https://github.com/taylorsam209/personal-project" style={{ textDecoration: "none" }} target="blank">
                        <div className="button"><i className="fab fa-github"></i> GitHub</div></a>
                </div>

                <div className="work-container trippin-online">
                    <h2>Trippin</h2>
                    <img src={trippin} alt="trippin" />
                    <p>Group project mobile view application that allows for easy trip planning with friends and families.</p>
                    <h3>Technology Used</h3>
                    <p>• Implemented card components from Material-UI library to build frontend pages.
                        • Created Redux action builders for state management allowing multiple react components access to data throughout application.
                        • Backend Unit Testing written in Postman Collections to test REST requests to Yelp API and PostgreSQL database.
                    </p>
                        <a href="http://trippinonline.com" style={{ textDecoration: "none" }} target="blank"><div className="button">Website</div></a>
                        <a href="https://github.com/Vacation-Application/vacation" style={{ textDecoration: "none" }} target="blank">
                        <div className="button"><i className="fab fa-github"></i> GitHub</div></a>
                </div>

            </div>
        )
    }
}

export default Projects;