import React from "react";
import "./PersonalJourney.css";
import { Fade } from "react-reveal";
import { hobbiesSection } from "../../portfolio";

const PersonalJourney = () => {
  const learningJourney = [
    {
      title: "Currently Learning",
      content: "Actively tracking and integrating the latest AI advancements, including LLM architectures, vector search optimizations, and efficient MLOps practices.",
      icon: "fas fa-book-open"
    },
    {
      title: "Next Goal",
      content: "Leveraging state-of-the-art AI methodologies to architect robust, scalable systems and drive innovation in real-world applications.",
      icon: "fas fa-bullseye"
    },
    {
      title: "Emblem of Life",
      content: "YOLO (You Only Live Once)",
      icon: "fas fa-bolt"
    }
  ];

  return (
    <div className="personal-journey-container">
      <div className="learning-section">
        {learningJourney.map((item, index) => (
          <Fade bottom duration={200} distance="20px" delay={index * 200} key={index}>
            <div className="learning-card">
              <div className="learning-icon">
                <i className={item.icon}></i>
              </div>
              <div className="learning-content">
                <h3 className="learning-title">{item.title}</h3>
                <p className="learning-text">{item.content}</p>
              </div>
            </div>
          </Fade>
        ))}
      </div>
      
      <div className="hobbies-section">
        <h3 className="hobbies-title">Things I Enjoy</h3>
        <div className="hobbies-grid">
          {hobbiesSection.hobbiesCards.map((hobby, index) => (
            <Fade bottom duration={200} distance="20px" delay={index * 200} key={index}>
              <div className="hobby-card">
                <div className="hobby-image-container">
                  <img 
                    src={hobby.image} 
                    alt={hobby.title} 
                    className="hobby-image"
                  />
                </div>
                <h4 className="hobby-title">{hobby.title}</h4>
              </div>
            </Fade>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PersonalJourney;