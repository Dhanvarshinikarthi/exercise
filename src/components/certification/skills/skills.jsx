import React from "react";
import "./skills.css";
const Skills = () => {
  return (
    <div className="skills_main">
      <h1>SKILLS</h1>
      <div className="skilllist">
        <div className="htmlskill">
          <p>HTML</p>
          <div className="container">
            <div className="skills html">90%</div>
          </div>
        </div>
        <div className="cssskill">
          <p>CSS</p>
          <div className="container">
            <div className="skills css">80%</div>
          </div>
        </div>
        <div className="jsskill">
          <p>JAVASCRIPT</p>
          <div className="container">
            <div className="skills js">70%</div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Skills;
