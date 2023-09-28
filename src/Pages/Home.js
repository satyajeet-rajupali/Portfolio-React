import React from "react";
import profileimg from "../assets/img/profileImage _1.png";
import { Link } from "react-router-dom";
import Linkedinicon from "../assets/img/socialicons/linkedin.png";
import Githubicon from "../assets/img/socialicons/github.png";
import MailIcon from "../assets/img/socialicons/email.png";


const Home = () => {
  return (
    <>
      <div className="container py-5">
        <div className="row">
          <div className="col-sm-5 col-md-5 col-lg-5 pt-3">
            <img src={profileimg} alt="hjdjdjd" className="img-fluid" />
          </div>
          <div className="col-sm-7 col-md-7 col-lg-7 align-self-center text-center">
            <h1 className="mt-4">Satya Jeet Raj Upali</h1>
            <h3 className="mt-1">Software Engineer</h3>
            <div className="container justify-content-stretch">
              <a
                href="https://www.linkedin.com/in/satyajeetrajupali/?original_referer="
                target="_blank"
                rel="noreferrer"
                className="mx-2 my-3"
              >
                <img
                  src={Linkedinicon}
                  alt="linkedin"
                  style={{ height: '20px', width: '20px' }}
                />
              </a>
              <a
                href="https://github.com/satyajeet-rajupali"
                target="_blank"
                rel="noreferrer"
                className="mx-2 my-3"
              >
                <img
                  src={Githubicon}
                  alt="github"
                  style={{ height: '20px', width: '20px' }}

                />
              </a>
              <a
                href="mailto:satyajeetrajupali@gmail.com"
                target="_blank"
                rel="noreferrer"
                className="mx-2 my-3"
              >
                <img
                  src={MailIcon}
                  alt="email"
                  style={{ height: '20px', width: '20px' }}
                />
              </a>
            </div>
            <div className="container-fluid text-center">
              <button type="button" className="btn btn-primary mx-1 my-3">Resume</button>
              <Link to="/contact">
                <button type="button" className="btn btn-primary mx-1 my-3">Hire Me</button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
