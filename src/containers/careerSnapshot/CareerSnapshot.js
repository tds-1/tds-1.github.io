import React from "react";
import "./CareerSnapshot.css";
import { Fade } from "react-reveal";

const CareerSnapshot = () => {
  const specialties = [
    {
      title: "Backend Engineering",
      description: "Flask, FastAPI, scalable APIs, microservices architecture",
      icon: "fas fa-server"
    },
    {
      title: "AI Integrations",
      description: "Computer vision, NLP, recommendation engines, transformer models",
      icon: "fas fa-brain"
    },
    {
      title: "Cloud & Infrastructure",
      description: "AWS Lambda, SQS, Terraform, serverless architecture",
      icon: "fas fa-cloud"
    },
    {
      title: "Search & Data Systems",
      description: "Elasticsearch, recommendation algorithms, data pipelines",
      icon: "fas fa-database"
    },
    {
      title: "DevOps & MLOps",
      description: "CI/CD pipelines, containerization, infrastructure as code, and ML model deployment",
      icon: "fas fa-cogs"
    },
  ];

  return (
    <div className="career-snapshot-container">
      <div className="career-snapshot-grid">
        {specialties.map((specialty, index) => (
          <Fade bottom duration={200} distance="20px" delay={index * 200} key={index}>
            <div className="career-snapshot-card">
              <div className="career-snapshot-icon">
                <i className={specialty.icon}></i>
              </div>
              <h3 className="career-snapshot-title">{specialty.title}</h3>
              <p className="career-snapshot-description">{specialty.description}</p>
            </div>
          </Fade>
        ))}
      </div>
    </div>
  );
};

export default CareerSnapshot;