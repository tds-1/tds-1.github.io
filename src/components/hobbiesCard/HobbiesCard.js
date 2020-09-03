import React from "react";
import "./HobbiesCard.css";

export default function HobbiesCard({ cardInfo }) {
  return (

      <div className="hobby-card">
        <div className="hobby-image-div">
          <img src={cardInfo.image} alt="PWA" className="card-image"></img>
        </div>
        <div className="certificate-detail-div">
          <h5 className="card-title">{cardInfo.title}</h5>
        </div>
        
      </div>
  );
}
