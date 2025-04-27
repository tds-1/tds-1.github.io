import React from "react";
import "./SoftwareSkill.css";

const SoftwareSkill = ({ skills, onSkillClick, activeSkill }) => {
  return (
    <div className="software-skills-main-div">
      <ul className="dev-icons">
        {skills.map((skill, index) => {
          return (
            <li 
              key={index}
              className={`software-skill-inline ${activeSkill === index ? 'active' : ''}`} 
              name={skill.skillName}
              onClick={() => onSkillClick(index)}
            >
              <i className={skill.fontAwesomeClassname}></i>
              <p>{skill.skillName}</p>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default SoftwareSkill;