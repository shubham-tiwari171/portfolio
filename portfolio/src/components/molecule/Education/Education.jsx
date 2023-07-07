import React from "react";
import "./Education.css";
import { data } from "./EducationData";
const Education = () => {
  return (
    <>
      {/* <h1>Education</h1> */}
      <div className="card-container">
        {data.map((edu, index) => (
          <div className="card" key={index}>
            <span className="title">{edu.qualification}</span>
            <p className="description">
              <span style={{ fontWeight: "bold" }}>Collage :- </span>
              {edu.collage}
            </p>
            <p className="description">
              <span style={{ fontWeight: "bold" }}>Marks In % or cgpa :- </span>{" "}
              {edu.agg}
            </p>
            <p className="description">
              <span style={{ fontWeight: "bold" }}>Year :- </span>
              {edu.passingYear}
            </p>
          </div>
        ))}
      </div>
    </>
  );
};

export default Education;
