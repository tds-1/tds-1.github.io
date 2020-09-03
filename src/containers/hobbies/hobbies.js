import React from "react";
import "./hobbies.css";
import HobbiesCard from "../../components/hobbiesCard/HobbiesCard";
import { hobbiesSection } from "../../portfolio";
import { Fade } from "react-reveal";

export default function Achievement() {
  function openUrlInNewTab(url) {
    var win = window.open(url, "_blank");
    win.focus();
  }
  return (
    <Fade bottom duration={1000} distance="20px">
    <div className="main" id="hobbies">
      <div className="achievement-main-div">
        <div className="achievement-header">
          <h1 className="heading achievement-heading">{hobbiesSection.title}</h1>
          <p className="subTitle achievement-subtitle">{hobbiesSection.subtitle} </p>
        </div>
        <div className="achievement-cards-div">
          {hobbiesSection.hobbiesCards.map(card => {
            return (
              <HobbiesCard
                cardInfo={{
                  title: card.title,
                  image: card.image,
                }}    
              />
            );
          })}
        </div>
      </div>
    </div>
    </Fade>
  );
}
