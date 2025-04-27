import React from "react";
import "./ExperienceTimeline.css";
import { Fade } from "react-reveal";
import { workExperiences } from "../../portfolio";

const ExperienceTimeline = () => {
  return (
    <div className="experience-timeline-container">
      <div className="timeline">
        {workExperiences.experience.map((experience, index) => (
          <Fade bottom duration={200} distance="20px" key={index}>
            <div className="timeline-item">
              <div className="timeline-content">
                <div className="timeline-logo-container">
                  <img 
                    className="timeline-logo" 
                    src={experience.companylogo} 
                    alt={experience.company}
                  />
                </div>
                <div className="timeline-info">
                  <h3 className="timeline-role">{experience.role}</h3>
                  <h4 className="timeline-company">{experience.company}</h4>
                  <p className="timeline-date">{experience.date}</p>
                  
                  <ul className="timeline-bullets">
                    {experience.descBullets && 
                      experience.descBullets.map((desc, i) => (
                        <li key={i} className="timeline-bullet-item">
                          {desc}
                        </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </Fade>
        ))}
      </div>
    </div>
  );
};

export default ExperienceTimeline;