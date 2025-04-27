import React from "react";
import "./Footer.css";
import { Fade } from "react-reveal";
import emoji from "react-easy-emoji";
import SocialMedia from "../socialMedia/SocialMedia";

const Footer = () => {
  return (
    <footer className="footer">
      <Fade bottom duration={200} distance="5px">
        <div className="footer-container">
          <div className="footer-top">
            <div className="footer-logo">TD</div>
            <div className="footer-nav">
              <a href="#hero" className="footer-link">Home</a>
              <a href="#career-snapshot" className="footer-link">What I Do</a>
              <a href="#experience" className="footer-link">Experience</a>
              <a href="#projects" className="footer-link">Projects</a>
              <a href="#contact" className="footer-link">Contact</a>
            </div>
          </div>
          
          <div className="footer-middle">
            <SocialMedia />
          </div>
          
          <div className="footer-bottom">
            <p className="footer-text">
              {emoji("❤️")} Designed & Built by Tanmay Deep Sharma
            </p>
            <p className="footer-copyright">
              © {new Date().getFullYear()} All rights reserved
            </p>
          </div>
        </div>
      </Fade>
    </footer>
  );
};

export default Footer;