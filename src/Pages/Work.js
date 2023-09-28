import React from "react";
import "./Work.css";
import work from "../Data/Work.json";

const Work = () => {
  return (
    <>
      <div id="work">
        <div className="container">
          <div className="row">
            <div className="col">
              <h1>Internship</h1>
              {work.map((item, i) => (
                <div className="workblock" key={i}>
                  <div className="row">
                    <div className="col-sm-5">
                      <h5>{item.year}</h5>
                    </div>
                    <div className="col-sm-7">
                      <div className="educationright" >
                        <h5>{item.companyname}</h5>
                        <h6 className="position">
                          <i>{item.position}</i>
                        </h6>
                        <h6><small>{item.desc}</small></h6>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Work;
