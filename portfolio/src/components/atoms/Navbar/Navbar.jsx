import React from "react";
import "./Navbar.css";

const Navbar = () => {
  const handleClick = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      window.scrollTo({
        top: section.offsetTop,
        behavior: "smooth",
      });
    }
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark mynavbar">
      <a className="navbar-brand" href="#">
        Navbar
      </a>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarNavAltMarkup"
        aria-controls="navbarNavAltMarkup"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
        <div className="navbar-nav">
          <a
            className="nav-item nav-link active"
            href="#home"
            onClick={() => handleClick("home")}
          >
            Home <span className="sr-only">(current)</span>
          </a>
          <a
            className="nav-item nav-link"
            href="#about"
            onClick={() => handleClick("about")}
          >
            About
          </a>
          <a
            className="nav-item nav-link"
            href="#education"
            onClick={() => handleClick("education")}
          >
            Education
          </a>
          <a
            className="nav-item nav-link"
            href="#skills"
            onClick={() => handleClick("skills")}
          >
            Skills
          </a>
          <a
            className="nav-item nav-link"
            href="#projects"
            onClick={() => handleClick("projects")}
          >
            Projects
          </a>
          <a
            className="nav-item nav-link"
            href="#contactus"
            onClick={() => handleClick("contactus")}
          >
            Contact Us
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
