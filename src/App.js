import Nav from "./common/Nav";
import Home from "./Pages/Home";
import "./common/Commoncss.css";
import About from "./Pages/About";
import Education from "./Pages/Education";
import Work from "./Pages/Work";
import Contact from "./Pages/Contact";
import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import React, { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import PageNotFound from "./Pages/PageNotFound";
import Jsprojects from "./Pages/Jsprojects";

function App() {
  // useEffect(() => {
  //   Aos.init({ duration: 2000 });
  // }, []);

  return (
    <>
      <Router>
        <Nav />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/about" element={<About />} />
          <Route exact path="/work" element={<Work />} />
          <Route exact path="/education" element={<Education />} />
          <Route exact path="/projects" element={<Jsprojects />} />
          <Route exact path="/contact" element={<Contact />} />
          <Route path="*" element={<PageNotFound />} />
        </Routes>

      </Router>
    </>
  );
}

export default App;
