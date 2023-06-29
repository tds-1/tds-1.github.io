import React, { useState, useEffect, createRef } from "react";
import "./ProjectCard.css";
import ColorThief from "colorthief";

export default function ProjectCard({ cardInfo }) {
  const [colorArrays, setColorArrays] = useState([]);


  function rgb(values) {
    return typeof values === "undefined" ? null : "rgb(" + values.join(', ') + ")";
  }

  return (
    <div className="projectcard-card">
      <div style={{background: rgb(colorArrays) }} className="projectcard-banner">
        <h5 className="projectcard-text-company">{cardInfo.title}</h5>
      </div>
      <div className="projectcard-text-details">
        <p className="subTitle projectcard-text-desc">{cardInfo.description}</p>
      </div>
    </div>
  );
}
