import React from "react";
import "./Achievements.css";
import { Fade } from "react-reveal";
import { achievementSection } from "../../portfolio";

const Achievements = () => {
  const additionalAchievements = [
    {
      title: "Top-rated Employee",
      organization: "Qoala",
      period: "2 consecutive years",
      description: "Recognized for outstanding contributions and consistent high-quality work.",
      icon: "fas fa-award"
    },
    {
      title: "Finance Convener",
      organization: "Cultural Festival",
      period: "College",
      description: "Led financial operations for major college cultural festival, managing budget and sponsorships.",
      icon: "fas fa-university"
    },
    {
      title: "Problem Setting Lead",
      organization: "Cybros",
      period: "Technical Club",
      description: "Created challenging programming problems for competitive coding contests.",
      icon: "fas fa-code"
    }
  ];

  return (
    <div className="achievements-container">
      <div className="achievements-coding">
        <h3 className="achievements-subtitle">Competitive Programming</h3>
        <div className="achievements-card-grid">
          {achievementSection.achivementsCards.map((card, index) => (
            <Fade bottom duration={200} distance="20px" delay={index * 200} key={index}>
              <div className="achievement-card">
                <div className="achievement-image-container">
                  <img
                    src={card.image}
                    alt={card.title}
                    className="achievement-image"
                  />
                </div>
                <div className="achievement-detail">
                  <h3 className="achievement-title">{card.title}</h3>
                  <p className="achievement-subtitle">{card.subtitle}</p>
                  {card.footerLink && (
                    <div className="achievement-links">
                      {card.footerLink.map((link, i) => (
                        <a
                          key={i}
                          href={link.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="achievement-link"
                        >
                          {link.name}
                        </a>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            </Fade>
          ))}
        </div>
      </div>
      
      <div className="achievements-professional">
        <h3 className="achievements-subtitle">Professional Recognition</h3>
        <div className="achievements-badge-container">
          {additionalAchievements.map((achievement, index) => (
            <Fade bottom duration={200} distance="20px" delay={index * 200} key={index}>
              <div className="achievement-badge">
                <div className="badge-icon">
                  <i className={achievement.icon}></i>
                </div>
                <h4 className="badge-title">{achievement.title}</h4>
                <div className="badge-organization">{achievement.organization}</div>
                <div className="badge-period">{achievement.period}</div>
                <p className="badge-description">{achievement.description}</p>
              </div>
            </Fade>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Achievements;