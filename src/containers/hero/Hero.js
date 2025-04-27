import React from "react";
import "./Hero.css";
import { Fade } from "react-reveal";
import { greeting } from "../../portfolio";
import SocialMedia from "../../components/socialMedia/SocialMedia";
import Button from "../../components/button/Button";

const Hero = () => {
  return (
    <div className="hero-container">
      <div className="hero-content">
        <Fade bottom duration={200} distance="40px">
          <div className="hero-greeting fade-in">
            <span className="hero-greeting-text">Hello, I'm</span>
          </div>
        </Fade>
        
        <Fade bottom duration={200} distance="40px" delay={500}>
          <div className="hero-title-container fade-in delay-1">
            <h1 className="hero-title">{greeting.username}</h1>
          </div>
        </Fade>
        
        <Fade bottom duration={200} distance="40px" delay={1000}>
          <div className="hero-subtitle-container fade-in delay-2">
            <h2 className="hero-subtitle">Building Intelligent Systems that Scale</h2>
          </div>
        </Fade>
        
        <Fade bottom duration={200} distance="40px" delay={1500}>
          <div className="hero-description-container fade-in delay-3">
            <p className="hero-description">
              Senior Software Engineer specializing in AI Integration, Backend Engineering, and Data Systems
            </p>
          </div>
        </Fade>
        
        <Fade bottom duration={200} distance="40px" delay={2000}>
          <div className="hero-button-container fade-in delay-4">
            <Button text="View Resume" href={greeting.resumeLink} newTab={true} />
            <Button
              text="Let's Connect"
              href="#contact"
              newTab={false}
              theme="secondary"
            />
          </div>
        </Fade>
        
        <Fade bottom duration={200} distance="40px" delay={2500}>
          <div className="hero-social-container fade-in delay-4">
            <SocialMedia />
          </div>
        </Fade>
      </div>
      
      <div className="hero-image-container">
        <Fade right duration={200} distance="40px" delay={1000}>
          <div className="hero-background-animation">
            <div className="circle-1"></div>
            <div className="circle-2"></div>
            <div className="circle-3"></div>
            <div className="circle-4"></div>
          </div>
        </Fade>
      </div>
    </div>
  );
};

export default Hero;