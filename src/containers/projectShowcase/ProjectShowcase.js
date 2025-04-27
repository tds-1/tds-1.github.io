import React, { useState } from "react";
import "./ProjectShowcase.css";
import { Fade } from "react-reveal";
import { projects } from "../../portfolio";

const ProjectShowcase = () => {
  const [activeProject, setActiveProject] = useState(null);

  const toggleProjectDetails = (index) => {
    if (activeProject === index) {
      setActiveProject(null);
    } else {
      setActiveProject(index);
    }
  };

  return (
    <div className="project-showcase-container">
      <div className="project-grid">
        {projects.map((project, index) => (
          <Fade bottom duration={200} distance="20px" key={index}>
            <div className="project-card">
              <div className="project-header">
                <div className="project-folder">
                  <i className="fas fa-folder-open"></i>
                </div>
              </div>
              
              <h3 className="project-title">{project.title}</h3>
              
              <p className="project-description">
                {activeProject === index
                  ? project.desc
                  : `${project.desc.substring(0, 150)}...`}
              </p>
              
              <div className="project-details-toggle">
                <button 
                  className="details-button"
                  onClick={() => toggleProjectDetails(index)}
                >
                  {activeProject === index ? "Show Less" : "Show More"}
                </button>
              </div>
              
              <div className="project-tech-stack">
                {project.tags.map((tag, i) => (
                  <span key={i} className="project-tech">
                    {tag}
                  </span>
                ))}
              </div>
              
              {activeProject === index && (
                <div className="project-impact">
                  <div className="impact-item">
                    <span className="impact-label">Problem:</span>
                    <span className="impact-value">{project.problem}</span>
                  </div>
                  <div className="impact-item">
                    <span className="impact-label">Solution:</span>
                    <span className="impact-value">{project.solution}</span>
                  </div>
                  <div className="impact-item">
                    <span className="impact-label">Outcome:</span>
                    <span className="impact-value">{project.outcome}</span>
                  </div>
                </div>
              )}
            </div>
          </Fade>
        ))}
      </div>
    </div>
  );
};

export default ProjectShowcase;