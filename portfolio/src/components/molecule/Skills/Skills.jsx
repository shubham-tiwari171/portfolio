import React from "react";
import "./Skills.css";
import { MdArrowForward, MdArrowBack } from "react-icons/md";
import { useRef } from "react";
import { data } from "./data/SkillsData";
import { useNavigate } from "react-router-dom";
const Skills = () => {
  const navigate = useNavigate();
  const scrollRef = useRef();

  const handleLeftScroll = () => {
    scrollRef.current.scrollLeft -= 300;
  };

  const handleRightScroll = () => {
    scrollRef.current.scrollLeft += 300;
  };

  const handleShowAllTrainers = () => {
    navigate("/showAllTrainers");
  };

  return (
    <>
      <div className="skillsContainer">
        <div ref={scrollRef} className="slider">
          {data.map((skill, index) => (
            <div key={index} className="slide">
              <img src={skill.image} alt={skill.name} />
            </div>
          ))}
        </div>
        <div className="buttonContainer">
          {/* <button
            className={styles.showAllButton}
            onClick={handleShowAllTrainers}
          >
            Show All Trainers
          </button> */}
          <button className="button" onClick={handleLeftScroll}>
            <MdArrowBack className="mdArrowBack" size={26} />
          </button>
          <button className="button" onClick={handleRightScroll}>
            <MdArrowForward className="mdArrowForward" size={26} />
          </button>
        </div>
      </div>
    </>
  );
};
export default Skills;
