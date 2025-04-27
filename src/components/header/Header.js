import React, { useState, useEffect } from "react";
import Headroom from "react-headroom";
import "./Header.css";
import { greeting } from "../../portfolio";

const Header = ({ darkMode, toggleTheme }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  
  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      if (offset > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    
    window.addEventListener("scroll", handleScroll);
    
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  
  const closeMenu = () => {
    setIsMenuOpen(false);
  };
  
  const navItems = [
    { name: "Home", url: "#hero" },
    { name: "What I Do", url: "#career-snapshot" },
    { name: "Experience", url: "#experience" },
    { name: "Projects", url: "#projects" },
    { name: "Skills", url: "#skills" },
    { name: "AI Work", url: "#ai-innovations" },
    { name: "Contact", url: "#contact" }
  ];

  return (
    <Headroom>
      <header className={`header ${scrolled ? 'scrolled' : ''}`}>
        <div className="header-container">
          <a href="#hero" className="logo">
            <span className="logo-text">TD</span>
          </a>
          
          <div 
            className={`menu-toggle ${isMenuOpen ? 'active' : ''}`} 
            onClick={toggleMenu}
          >
            <div className="hamburger">
              <span></span>
              <span></span>
              <span></span>
            </div>
          </div>
          
          <nav className={`nav-menu ${isMenuOpen ? 'active' : ''}`}>
            <ul className="nav-list">
              {navItems.map((item, index) => (
                <li key={index} className="nav-item">
                  <a 
                    href={item.url} 
                    className="nav-link" 
                    onClick={closeMenu}
                  >
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
            
            {/* Container for buttons in mobile view */}
            <div className="mobile-actions">
              <div className="nav-button">
                <a 
                  href={greeting.resumeLink} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="resume-button"
                >
                  Resume
                </a>
              </div>
              
              <button 
                className="theme-toggle-button" 
                onClick={toggleTheme}
                aria-label={darkMode ? "Activate light mode" : "Activate dark mode"}
              >
                {darkMode ? "☀️" : "🌙"}
              </button>
            </div>
            
          </nav>
        </div>
      </header>
    </Headroom>
  );
};

export default Header;