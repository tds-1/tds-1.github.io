import React from "react";
import "./Greeting.css";
import SocialMedia from "../../components/socialMedia/SocialMedia";
import Button from "../../components/button/Button";
import { greeting } from "../../portfolio";
import {Fade} from "react-reveal";
import emoji from "react-easy-emoji";

export default function Greeting() {
  return (
    <Fade bottom duration={200} distance="40px">
    <div className="greet-main" id="greeting">
      <div className="greeting-main">
        <div className="greeting-text-div">
          <div>
            <span className="greeting-pre">Senior Software Engineer</span>
            <h1 className="greeting-text">
              {greeting.title} {emoji("👋")}
            </h1>
            <h2 className="greeting-tagline">
              Python & AI Specialist | Cloud Architect
            </h2>
            <p className="greeting-text-p subTitle">{greeting.subTitle}</p>
            <SocialMedia />
            <div className="button-greeting-div">
              <Button text="Contact me" href="#contact" />
              <Button text="See my resume" newTab={true} href={greeting.resumeLink} />
              <Button text="View projects" href="#projects" />
            </div>
          </div>
        </div>
        <div className="greeting-image-div">
          <img 
            alt="Tanmay Deep - AI Engineer Illustration" 
            src={require("../../assets/images/programmer.svg")}
            className="greeting-image"
          />
        </div>
      </div>
    </div>
    </Fade>
  );
}
