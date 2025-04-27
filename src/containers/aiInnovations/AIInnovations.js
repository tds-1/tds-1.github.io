import React from "react";
import "./AIInnovations.css";
import { Fade } from "react-reveal";

const AIInnovations = () => {
  const innovations = [
    {
      title: "AI File Extractor Service",
      description: "Engineered a production-grade service that uses computer vision and OCR to extract structured data from documents, with error handling, load balancing, fallback and retry mechanisms.",
      tech: "Flask, Google Vision, AWS S3, SQS",
      icon: "fas fa-file-alt"
    },
    {
      title: "Conversation Sentiment Analyzer",
      description: "Developed an AWS Lambda-based tool that processes customer support conversations to identify sentiment, key topics, and generate actionable insights for improving service quality.",
      tech: "AWS Lambda, NLP, Transformer Models",
      icon: "fas fa-comments"
    },
    {
      title: "AI Chatbot Sales Automation",
      description: "Created an intelligent chatbot system that understands customer needs, recommends appropriate insurance products, and automates the sales process with human handoff capabilities.",
      tech: "FastAPI, Elasticsearch, Machine Learning",
      icon: "fas fa-robot"
    }
  ];

  return (
    <div className="ai-innovations-container">
      <div className="ai-innovations-intro">
        <Fade bottom duration={200} distance="20px">
          <p className="intro-text">
            My work extends beyond traditional backend development, focusing on
            integrating artificial intelligence to solve complex business problems
            and create systems that deliver real impact.
          </p>
        </Fade>
      </div>
      
      <div className="innovations-grid">
        {innovations.map((innovation, index) => (
          <Fade bottom duration={200} distance="20px" delay={index * 200} key={index}>
            <div className="innovation-card">
              <div className="innovation-icon">
                <i className={innovation.icon}></i>
              </div>
              <div className="innovation-content">
                <h3 className="innovation-title">{innovation.title}</h3>
                <p className="innovation-description">{innovation.description}</p>
                <div className="innovation-tech">
                  <span className="tech-label">Tech Stack:</span>
                  <span className="tech-value">{innovation.tech}</span>
                </div>
              </div>
            </div>
          </Fade>
        ))}
      </div>
    </div>
  );
};

export default AIInnovations;