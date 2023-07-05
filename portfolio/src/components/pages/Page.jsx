import React, { useRef } from "react";
import "./Page.css";
import Navbar from "../atoms/Navbar/Navbar";
import Home from "../molecule/Home/Home";
import Education from "../molecule/Education/Education";
import Skills from "../molecule/Skills/Skills";
import Projects from "../molecule/Projects/Projects";

const Page = () => {
  const homeRef = useRef(null);
  const aboutRef = useRef(null);
  const educationRef = useRef(null);
  const skillsRef = useRef(null);
  const projectsRef = useRef(null);
  const contactusRef = useRef(null);

  const sectionRef = {
    home: homeRef,
    about: aboutRef,
    education: educationRef,
    skills: skillsRef,
    projects: projectsRef,
    contactus: contactusRef,
  };

  const navigateToSection = (link) => {
    const section = sectionRef[link];
    if (section && section.current) {
      console.log(section);
      section.current.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  return (
    <>
      <Navbar navigateToSection={navigateToSection} />
      <div className="page-content">
        <section ref={homeRef} id="home" className="section">
          <div className="section-content">
            <Home />
          </div>
        </section>
        <section ref={aboutRef} id="about" className="section">
          <div className="section-content">
            <h1>About Section</h1>
            <p>Learn more about us.</p>
          </div>
        </section>
        <section ref={educationRef} id="services" className="section">
          <div className="section-content">
            <Education />
          </div>
        </section>
        <section ref={skillsRef} id="skills" className="section">
          <div className="section-content">
            <Skills />
          </div>
        </section>
        <section ref={projectsRef} id="projects" className="section">
          <div className="section-content">
            <Projects />
          </div>
        </section>
        <section ref={contactusRef} id="contactus" className="section">
          <div className="section-content"></div>
        </section>
      </div>
    </>
  );
};

export default Page;
