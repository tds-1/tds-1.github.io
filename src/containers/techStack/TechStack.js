import React, { useState } from "react";
import "./TechStack.css";
import { Fade } from "react-reveal";
import { skillsSection, techStack } from "../../portfolio";
import SoftwareSkill from "../../components/softwareSkills/SoftwareSkill";

const TechStack = () => {
  const [activeSkill, setActiveSkill] = useState(null);

  const handleSkillClick = (index) => {
    if (activeSkill === index) {
      setActiveSkill(null);
    } else {
      setActiveSkill(index);
    }
  };

  const skillDescriptions = {
    "Python": "Built AI conversation analyzers, image processing systems, and scalable APIs using Python's ecosystem.",
    "AI & ML": "Designed and deployed transformer models for NLP and computer vision applications.",
    "AWS": "Architected serverless solutions with Lambda, SQS, and S3 for efficient scalable systems.",
    "Elasticsearch": "Implemented complex search and recommendation algorithms for financial and insurance products.",
    "Docker": "Containerized applications for consistent deployment across development and production environments.",
    "Kubernetes": "Orchestrated container deployments for high-availability microservices architecture.",
    "Databases": "Designed schema and optimized queries for PostgreSQL and MongoDB in high-traffic applications.",
    "API Design": "Created RESTful and GraphQL APIs following best practices for developer experience and performance.",
    "Cloud Architecture": "Designed cloud-native solutions optimizing for cost, performance, and reliability.",
    "Terraform": "Implemented infrastructure as code for automated, consistent environment provisioning.",
    "CI/CD": "Set up automated testing and deployment pipelines using GitHub Actions and Jenkins.",
    "Linux": "Extensive experience with Linux systems administration and shell scripting."
  };

  return (
    <div className="tech-stack-container">
      <div className="skills-overview">
        <Fade bottom duration={200} distance="20px">
          <div className="skills-icons-container">
            <SoftwareSkill 
              skills={skillsSection.softwareSkills} 
              onSkillClick={handleSkillClick}
              activeSkill={activeSkill}
            />
            
            {activeSkill !== null && (
              <div className="skill-tooltip">
                <p>{skillDescriptions[skillsSection.softwareSkills[activeSkill].skillName]}</p>
              </div>
            )}
          </div>
        </Fade>
      </div>
      
      <Fade bottom duration={200} distance="20px">
        <div className="proficiency-section">
          <h3 className="proficiency-title">Proficiency</h3>
          <div className="proficiency-container">
            {techStack.experience.map((exp, index) => (
              <div className="proficiency-item" key={index}>
                <div className="proficiency-info">
                  <span className="proficiency-name">{exp.Stack}</span>
                  <span className="proficiency-percentage">{exp.progressPercentage}</span>
                </div>
                <div className="proficiency-bar">
                  <div 
                    className="proficiency-value" 
                    style={{width: exp.progressPercentage}}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Fade>
    </div>
  );
};

export default TechStack;