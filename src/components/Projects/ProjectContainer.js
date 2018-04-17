import React from "react";
import "./Projects.css";
import "font-awesome/css/font-awesome.min.css";

const ProjectContainer = props => {
  return (
    <div className={props.classes}>
      <h2>{props.title}</h2>
      <div className="img-container">
        <img src={props.image} alt="closii music" />
      </div>
      <div>
        <p>{props.intro}</p>
      </div>
      <h3>Technology Used</h3>
      <div className="description-container">
        <p className="tech-description">{props.description}</p>
      </div>
      <a href={props.website} style={{ textDecoration: "none" }} target="blank">
        <div className="button">Website</div>
      </a>
      <a href={props.github} style={{ textDecoration: "none" }} target="blank">
        <div className="button">
          <i className="fab fa-github" /> GitHub
        </div>
      </a>
    </div>
  );
};

export default ProjectContainer;
