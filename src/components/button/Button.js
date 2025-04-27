import React from "react";
import "./Button.css";

const Button = ({ text, href, newTab, theme = "primary", className = "" }) => {
  return (
    <a 
      className={`button ${theme === "primary" ? "button-primary" : "button-secondary"} ${className}`} 
      href={href} 
      target={newTab ? "_blank" : "_self"}
      rel={newTab ? "noopener noreferrer" : ""}
    >
      {text}
    </a>
  );
};

export default Button;