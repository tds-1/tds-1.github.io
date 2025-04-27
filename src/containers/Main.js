import React from "react";
import Header from "../components/header/Header";
import Hero from "./hero/Hero";
import CareerSnapshot from "./careerSnapshot/CareerSnapshot";
import ExperienceTimeline from "./experienceTimeline/ExperienceTimeline";
import ProjectShowcase from "./projectShowcase/ProjectShowcase";
import TechStack from "./techStack/TechStack";
import AIInnovations from "./aiInnovations/AIInnovations";
import Achievements from "./achievements/Achievements";
import PersonalJourney from "./personalJourney/PersonalJourney";
import Contact from "./contact/Contact";
import Footer from "../components/footer/Footer";
import Top from "./topbutton/Top";

const Main = ({ darkMode, toggleTheme }) => {
  return (
    <div className="main-container">
      <Header darkMode={darkMode} toggleTheme={toggleTheme} />
      
      <section id="hero" className="section">
        <div className="container">
          <Hero />
        </div>
      </section>
      
      <section id="career-snapshot" className="section">
        <div className="container">
          <h2 className="section-title">What I Do</h2>
          <CareerSnapshot />
        </div>
      </section>
      
      <section id="experience" className="section">
        <div className="container">
          <h2 className="section-title">Professional Journey</h2>
          <ExperienceTimeline />
        </div>
      </section>
      
      <section id="projects" className="section">
        <div className="container">
          <h2 className="section-title">Featured Projects</h2>
          <ProjectShowcase />
        </div>
      </section>
      
      <section id="skills" className="section">
        <div className="container">
          <h2 className="section-title">Skills & Technologies</h2>
          <TechStack />
        </div>
      </section>
      
      <section id="ai-innovations" className="section">
        <div className="container">
          <h2 className="section-title">AI Innovations</h2>
          <AIInnovations />
        </div>
      </section>
      
      <section id="achievements" className="section">
        <div className="container">
          <h2 className="section-title">Achievements & Recognition</h2>
          <Achievements />
        </div>
      </section>
      
      <section id="personal" className="section">
        <div className="container">
          <h2 className="section-title">Personal Learning Journey</h2>
          <PersonalJourney />
        </div>
      </section>
      
      <section id="contact" className="section">
        <div className="container">
          <h2 className="section-title">Let's Connect</h2>
          <Contact />
        </div>
      </section>
      
      <Footer />
      <Top />
    </div>
  );
};

export default Main;