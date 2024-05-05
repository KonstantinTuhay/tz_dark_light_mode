import React, { useState } from "react";
import "./App.css";

const App = () => {
  const [theme, setTheme] = useState("light");
  const switchTheme = () => {
    setTheme((prev) => (prev === "light" ? "dark" : "light"));
  };
  return (
    <div className="wrapper" id={theme}>
      <div className="toggle-container">
        <p
          style={{ color: theme === "light" ? "black" : "white" }}
          className="change-text"
        >
          {theme} mode
        </p>
        <input onChange={switchTheme} type="checkbox" id="toggle-btn" />
      </div>
    </div>
  );
};

export default App;
