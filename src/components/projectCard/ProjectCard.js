import React, { useState } from "react";
import "./ProjectCard.css";

export default function ProjectCard({ cardInfo }) {
  const [colorArrays, setColorArrays] = useState([]);

  function rgb(values) {
    return typeof values === "undefined" ? null : "rgb(" + values.join(', ') + ")";
  }

  return (
    <div className="projectcard-card">
      <div className="projectcard-banner">
        <h5 className="projectcard-text-company">{cardInfo.title}</h5>
      </div>
      <div className="projectcard-text-details">
        <p className="subTitle projectcard-text-desc">{cardInfo.description}</p>
        
        {cardInfo.tags && cardInfo.tags.length > 0 && (
          <div className="projectcard-tags">
            {cardInfo.tags.map((tag, index) => (
              <span key={index} className="projectcard-tag">{tag}</span>
            ))}
          </div>
        )}
        
        {cardInfo.link && (
          <div className="projectcard-link">
            <a href={cardInfo.link} target="_blank" rel="noopener noreferrer">
              View Project
            </a>
          </div>
        )}
      </div>
    </div>
  );
}
