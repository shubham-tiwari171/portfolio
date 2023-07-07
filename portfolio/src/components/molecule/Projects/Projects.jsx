import React from "react";
import "./Projects.css";
import { BsLink45Deg, BsGithub } from "react-icons/bs";
import { data } from "./ProjectsData";
const Projects = () => {
  return (
    <>
      <div className="project-card-wrapper">
        {data.map((project, index) => (
          <div className="project-card" key={project.id}>
            <div className="project-tumb">
              <img src={project.url} alt="" />
            </div>
            <div className="project-details">
              <h4>
                <span>{project.projectName}</span>
              </h4>
              <p>{project.overview}</p>
              <div className="project-bottom-details">
                <div className="project-links">
                  <a href={project.deployedLink}>
                    Deployed <BsLink45Deg size={30} />
                  </a>
                  <a href={project.gitLink}>
                    Git <BsGithub size={30} />
                  </a>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default Projects;
