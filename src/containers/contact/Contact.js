import React, { useState } from "react";
import "./Contact.css";
import SocialMedia from "../../components/socialMedia/SocialMedia";
import { contactInfo } from "../../portfolio";
import { Fade } from "react-reveal";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);
  
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };
  
  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitStatus("success");
      setFormData({
        name: "",
        email: "",
        message: ""
      });
      
      // Reset status after 5 seconds
      setTimeout(() => {
        setSubmitStatus(null);
      }, 5000);
    }, 1500);
  };

  return (
    <div className="contact-container">
      <div className="contact-grid">
        <Fade left duration={200} distance="20px">
          <div className="contact-info">
            <h3 className="contact-heading">{contactInfo.title}</h3>
            <p className="contact-subheading">{contactInfo.subtitle}</p>
            
            <div className="contact-details">
              <div className="contact-item">
                <i className="fas fa-phone"></i>
                <a href={`tel:${contactInfo.number}`} className="contact-link">
                  {contactInfo.number}
                </a>
              </div>
              
              <div className="contact-item">
                <i className="fas fa-envelope"></i>
                <a href={`mailto:${contactInfo.email_address}`} className="contact-link">
                  {contactInfo.email_address}
                </a>
              </div>
            </div>
            
            <div className="contact-social">
              <SocialMedia />
            </div>
            
            <div className="contact-image">
              <img 
                src={require("../../assets/images/contactMail.webp")} 
                alt="Contact" 
                className="contact-illustration"
              />
            </div>
          </div>
        </Fade>
      </div>
    </div>
  );
};

export default Contact;