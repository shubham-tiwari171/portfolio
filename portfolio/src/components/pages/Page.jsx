import React, { useRef } from "react";
import axios from "axios";
import "./Page.css";
import Navbar from "../atoms/Navbar/Navbar";
import Home from "../molecule/Home/Home";
import About from "../molecule/About/About";
import Education from "../molecule/Education/Education";
import Skills from "../molecule/Skills/Skills";
import Projects from "../molecule/Projects/Projects";
import ContactUs from "../molecule/ContactUs/ContactUs";
import Resume from "../molecule/Resume/Resume";
import resumePDF from "./Resume_Shubham_Tiwari.pdf";
const Page = () => {
  const homeRef = useRef(null);
  const aboutRef = useRef(null);
  const educationRef = useRef(null);
  const skillsRef = useRef(null);
  const projectsRef = useRef(null);
  const resumeRef = useRef(null);
  const contactusRef = useRef(null);

  const sectionRef = {
    home: homeRef,
    about: aboutRef,
    education: educationRef,
    skills: skillsRef,
    projects: projectsRef,
    resume: resumeRef,
    contact: contactusRef,
  };

  const scrollToSection = (link) => {
    const section = sectionRef[link];
    if (section && section.current) {
      section.current.scrollIntoView({
        behavior: "smooth",
        block: "start",
        inline: "start",
      });
      // setTimeout(() => {
      //   window.scroll(0, window.pageYOffset + 200);
      // }, 300);
    }
  };
  const handleDownloadResume = async () => {
    try {
      const response = await axios.get(resumePDF, { responseType: "blob" });
      const blob = new Blob([response.data], { type: "application/pdf" });
      const url = URL.createObjectURL(blob);
      const link = document.createElement("a");
      link.href = url;
      link.download = "Resume_Shubham_tiwari.pdf";
      link.click();
      URL.revokeObjectURL(url);
    } catch (error) {
      console.error("Error downloading resume:", error);
    }
  };
  return (
    <>
      <Navbar scrollToSection={scrollToSection} />
      <div className="page-content">
        <section ref={homeRef} id="home" className="section">
          <div className="section-content">
            <Home />
          </div>
        </section>
        <section ref={aboutRef} id="about" className="section">
          <div className="section-content">
            <h1>About</h1>
            <About />
          </div>
        </section>
        <section ref={educationRef} id="services" className="section">
          <div className="section-content">
            <h1>Education</h1>
            <Education />
          </div>
        </section>
        <section ref={skillsRef} id="skills" className="section">
          <div className="section-content">
            <h1>Skills</h1>
            <Skills />
          </div>
        </section>
        <section ref={projectsRef} id="projects" className="section">
          <div className="section-content">
            <h1>Projects</h1>
            <Projects />
          </div>
        </section>
        <section ref={resumeRef} id="projects" className="section">
          <div className="section-content">
            <div className="resumeHeader">
              <h1>Resume</h1>
              <button
                className="btn btn-outline-dark btn-lg"
                onClick={handleDownloadResume}
              >
                Download Resume
              </button>
            </div>
            <Resume />
          </div>
        </section>
        <section ref={contactusRef} id="contactus" className="section">
          <div className="section-content">
            <h1>Contact</h1>
            <ContactUs />
          </div>
        </section>
      </div>
    </>
  );
};

export default Page;
