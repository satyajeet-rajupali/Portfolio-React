import React from "react";
import "./About.css";
import Skills from "./Skills";

const About = () => {
  return (
    <div id="about">
      <div className="container">
        <div className="row">
          <div className="col-sm-12">
            <div className="aboutcontent">
              <h1>About Me</h1>
              <p>
                I am a Web Developer and a deep learning enthusiast.
                I enjoy problem-solving, developing new features, and
                designing prototypes using various mediums. My primary
                focus is on frontend development. As a deep learning
                enthusiast, I enjoy working with different datasets,
                reading various papers, and training models.
              </p>
              <Skills />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
