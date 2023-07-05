import React from "react";
import "./Page.css"; // Assuming you have a separate CSS file for styling
import Navbar from "../atoms/Navbar/Navbar";
import Home from "../molecule/Home/Home";
import Education from "../molecule/Education/Education";
import Skills from "../molecule/Skills/Skills";
import Projects from "../molecule/Projects/Projects";

const Page = () => {
  return (
    <>
      <Navbar />
      <div className="page-content">
        <section id="home" className="section">
          <div className="section-content">
            <Home />
          </div>
        </section>
        <section id="about" className="section">
          <div className="section-content">
            <h1>About Section</h1>
            <p>Learn more about us.</p>
          </div>
        </section>
        <section id="services" className="section">
          <div className="section-content">
            <Education />
          </div>
        </section>
        <section id="contact" className="section">
          <div className="section-content">
            <Skills />
          </div>
        </section>
        <section id="contact" className="section">
          <div className="section-content">
            <Projects />
          </div>
        </section>
        <section id="contact" className="section">
          <div className="section-content"></div>
        </section>
      </div>
    </>
  );
};

export default Page;
