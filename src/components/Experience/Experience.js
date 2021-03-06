import React, { Component } from "react";
import "./Experience.css";
import "font-awesome/css/font-awesome.min.css";

class Experience extends Component {
  render() {
    return (
      <div className="Experience">
        <h1>Experience</h1>

        <div className="work-experience-container">
          <h2>DevMountain Labs - React Native Developer</h2>
          <iframe
          className="video-container"
            src="https://www.youtube.com/embed/i4AMHO-GFqk"
            // frameborder="0"
            allow="encrypted-media"
            allowfullscreen='allowfullscreen'
          />
          <h3>React Native Mobile Application</h3>
      
            <p >
              Mobile App for iOS and Android devices built with the React Native
              framework to allow customers of Metro Inc to earn reward points
              for recycling scrap metals, recieve coupons on metals every month,
              and stay connected to their local scrap metal recycler.
            </p>
          
          <a
            href="https://github.com/taylorsam209/Metro-Rewards-Mobile-App"
            style={{ textDecoration: "none" }}
            target="blank"
          >
            <div className="button">
              <i className="fab fa-github" /> GitHub
            </div>
          </a>
        </div>
      </div>
    );
  }
}

export default Experience;
