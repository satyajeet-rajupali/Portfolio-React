import React, { useState } from "react";
import "./Nav.css";
import { Link } from "react-router-dom";

const Nav = () => {
  const [isNavCollapsed, setIsNavCollapsed] = useState(true);
  const handleNavCollapse = () => setIsNavCollapsed(!isNavCollapsed);
  const toggle = () => setIsNavCollapsed(true);
  
  return (
    <>
      <nav className="navbar fixed-top navbar-expand-lg navbar-dark bg-dark">
        <div className="container-fluid">
          <Link className="navbar-brand" to="/"><strong>satya.dev</strong></Link>
          <button className="navbar-toggler" onClick={handleNavCollapse} type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className={`${isNavCollapsed === true ? 'collapse': 'show'} navbar-collapse`} id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link" onClick={toggle} aria-current="page" to="/">Home</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" onClick={toggle} to="/about">About</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" onClick={toggle} to="/work">Internship</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" onClick={toggle} to="/education">Education</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" onClick={toggle} to="/projects">Projects</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" onClick={toggle} to="/contact">Contact</Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Nav;
