import React from "react";
import "./Projects.css";
import closiiMusic from "../../assets/closiimusic.PNG";
import veganEats from "../../assets/veganeats.PNG";
import trippin from "../../assets/trippin.PNG";
import calendar from "../../assets/calendar-ipad.PNG";
import ProjectContainer from "./ProjectContainer";

const Projects = () => {
  return (
    <div className="Projects">
      <h1>Projects</h1>
      <div className="flexbox-wrap">
        <ProjectContainer
          classes="work-container"
          title="Vegan Eats"
          image={veganEats}
          intro="Vegan Eats allows users to search for vegan and vegetarian friendly
                      resources by location and save favorite businesses to their profile."
          description="Built server side code to communicate with Yelp API using RESTful 
                      requests to pull JSON data about vegan businesses. Users can login with
                      Auth0, an authentication library written with NodeJS and express."
          website="http://veganeats.life"
          github="https://github.com/taylorsam209/personal-project"
        />

        <ProjectContainer
          classes="work-container offset-project"
          title="Calendar Scheduler"
          image={calendar}
          intro="The calendar scheduler allows users to set appointments for important dates
                and help with maintaining a busy schedule for active individuals."
          description="A front end web application built with React and the react-big-calendar library.
                        Material-ui library was utilized to create textfields for adding and editing appointments.
                        A single react component handles all the functionality of the calendar scheduler."
          website="https://taylorsam209.github.io/calendar-scheduler/"
          github="https://github.com/taylorsam209/calendar-scheduler"
        />

        <ProjectContainer
          classes="work-container"
          title="Closii Music"
          image={closiiMusic}
          intro="Closii Music is an artist portfolio developed for local Sacramento, CA 
                        based rapper Carlos Perez aka Closii to showcase his musical work."
          description="Frontend built with ReactJS focusing on mobile design implementing
                        CSS Grid. Stripe Checkout boilerplate is a payment feature running on server 
                        side with NodeJS to allow users to donate money in support of music."
          website="http://closiimusic.com"
          github="https://github.com/taylorsam209/closii-artist-portfolio"
        />

        <ProjectContainer
          classes="work-container offset-project"
          title="Trippin"
          image={trippin}
          intro="Trippin is a mobile view application that allows users to create 
                        trip events such as flights for easy trip planning with friends and families."
          description="Implemented components from Material-UI library to build frontend pages.
                        Used Redux for state management allowing components access to data throughout application. Unit tests 
                         written in Postman to test endpoints for APIs and PostgreSQL database."
          website="http://trippinonline.com"
          github="https://github.com/Vacation-Application/vacation"
        />
      </div>
    </div>
  );
};

export default Projects;
