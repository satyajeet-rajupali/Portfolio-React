import React from "react";
import "./Jsprojects.css";
import githubImg from "../assets/img/github.png";
import textAnalyzer from "../assets/img/textAnalyzer.png";
import newsAgent from "../assets/img/newsAgent.png";
import parkinson from "../assets/img/parkinson.png";
import brainTumorSegementation from "../assets/img/brainTumorSegementation.png";
import faceMaskDetections from "../assets/img/faceMaskDetections.png";

const Jsprojects = () => {
  return (
    <div className="jsprojects">
      <div className="container">
        <div className="row">
          <div className="col">
            <h1>Projects</h1>
            <div className="js mt-5">
              <div className="row">
                <div className="col-sm-6">
                  <h2>Text-Analyzer | React JS </h2>
                  <img src={textAnalyzer} alt="Text-Analyzer" />

                  <br />
                  <div className="container d-flex justify-content-center align-self-center">
                    <a
                      className="btn btn-primary github me-3"
                      href="https://text-analyzer-7ff2a.web.app/"
                      target="_blank"
                    >
                      Demo
                    </a>
                    <a
                      href="https://github.com/satyajeet-rajupali/Text-Ananlyzer"
                      className="btn btn-primary github ms-3"
                      target="_blank"
                      rel="noreferrer"
                    >
                      Code <img src={githubImg} />
                    </a>
                  </div>
                </div>
                <div className="col-sm-6">
                  <h2>NewsAgent | React JS </h2>
                  <img src={newsAgent} alt="News Agent" />
                  <div className="container d-flex justify-content-center align-self-center">
                    <a
                      href="https://newsagent-674b0.web.app/"
                      target="_blank"
                      className="btn btn-primary github ms-3"
                    >Demo
                    </a>
                    <a
                      href="https://github.com/satyajeet-rajupali/NewsAgent"
                      className="btn btn-primary github ms-3"
                      target="_blank"
                      rel="noreferrer"
                    >
                      Code <img src={githubImg} />
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <br />
            <div className="js">
              <div className="row">
                <div className="col-sm-6">
                  <h2>Brain Tumor Segmentation</h2>
                  <a href="https://github.com/satyajeet-rajupali/Brain-Tumor-Segmentation-Using-UNET" target="_blank">
                    <img src={brainTumorSegementation} alt="Ecommerce Small Project" />
                  </a>
                  <br />
                  <a
                    href="https://github.com/satyajeet-rajupali/Brain-Tumor-Segmentation-Using-UNET"
                    className="btn btn-default d-block github"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Code <img src={githubImg} />
                  </a>
                </div>
                <div className="col-sm-6">
                  <h2>COVID19 Face Mask Detection</h2>
                  <a
                    href="https://github.com/satyajeet-rajupali/COVID19_FACE_MASK_DETECTION"
                    target="_blank"
                  >
                    <img src={faceMaskDetections} alt="Ecommerce Small Project" />
                  </a>
                  <a
                    href="https://github.com/satyajeet-rajupali/COVID19_FACE_MASK_DETECTION"
                    className="btn btn-default d-block github"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Code <img src={githubImg} />
                  </a>
                </div>
              </div>
              <div className="col-sm-6">
                <h2>Research Paper</h2>
                <p>
                  Early Parkinson Disease Detection Using Audio Signal Processing
                </p>
                <a
                  href="https://github.com/satyajeet-rajupali/Early-Parkinson-Disease-Detection-Using-Audio-Signal-Processing"
                  target="_blank"
                >
                  <img src={parkinson} alt="Research Paper" />
                </a>
                <a
                  href="https://github.com/satyajeet-rajupali/Early-Parkinson-Disease-Detection-Using-Audio-Signal-Processing"
                  className="btn btn-default d-block github"
                  target="_blank"
                  rel="noreferrer"
                >
                  Code <img src={githubImg} />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Jsprojects;
