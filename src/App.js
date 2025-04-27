import React, { useState, useEffect } from "react";
import "./App.css";
import Main from "./containers/Main";

function App() {
  const [darkMode, setDarkMode] = useState(true);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 1000);
  }, []);

  const toggleTheme = () => {
    setDarkMode(!darkMode);
  };

  if (isLoading) {
    return (
      <div className="loading-screen">
        <div className="spinner"></div>
      </div>
    );
  }

  return (
    <div className={`app ${darkMode ? "dark-mode" : "light-mode"}`}>
      <Main darkMode={darkMode} toggleTheme={toggleTheme} />
    </div>
  );
}

export default App;