import React from "react";
import "./About.css"; // Import the CSS file for styling
import { CiPaperplane } from "react-icons/ci";
import { colors } from "@mui/material";
const About = () => {
  return (
    <div className="about-container">
      <div className="text-container">
        <p style={{ fontSize: "1.3rem", fontStyle: "italic" }}>
          Hi, I'm Shubham Tiwari from Delhi, India a Frontend Web Developer. I
          completed my degree in Computer Science, and I'm eager to expand my
          knowledge and skills in creating outstanding user experiences. I have
          practical experience working with popular frontend libraries such as
          React, and I'm also familiar with Html, CSS, and JavaScript. If you're
          looking for an ambitious Frontend Web Developer who is eager to grow,
          contribute to your organization, and make a positive impact, I would
          be thrilled to join your team. With my passion for personal growth in
          addition to creating exceptional user experiences, I am confident in
          my ability to contribute and drive success within your organization.
        </p>
        <h3>Apart from coding, some other activities that I love to do!</h3>
        <ol className="custom-list">
          <li>
            <CiPaperplane size={20} />
            Playing Games
          </li>
          <li>
            {" "}
            <CiPaperplane size={20} />
            Travelling
          </li>
          <li>
            {" "}
            <CiPaperplane size={20} />
            Watching Movies
          </li>
        </ol>
        <div className="quotes">
          <p style={{ textAlign: "right" }}>
            "Strive to build things that make a difference!"
          </p>
          <span style={{ textAlign: "right" }}>--SHUBHAM TIWARI</span>
        </div>
      </div>
      <div className="image-container">
        <img
          //   src="https://edgy.app/wp-content/uploads/2018/09/programming-day-FI.jpg"
          src="https://unblast.com/wp-content/uploads/2022/08/Programmer-Illustration.jpg"
          alt="About"
          className="clipped-image"
        />
      </div>
    </div>
  );
};

export default About;
