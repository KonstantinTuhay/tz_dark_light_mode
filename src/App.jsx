import React, { createContext, useState } from "react";
import MyComponent from "./MyComponent";
import "./App.css";

const ThemeContext = createContext(null);

export default function App() {
  const [theme, setTheme] = useState("light");

  return (
    <ThemeContext.Provider value={theme}>
      <div className="wrapper" id={theme}>
        <label>
          <MyComponent ThemeContext={ThemeContext} />
          <input
            type="checkbox"
            checked={theme === "dark"}
            onChange={(e) => {
              setTheme(e.target.checked ? "dark" : "light");
            }}
          />
          Use {theme === "light" ? "dark" : "light"} mode
        </label>
      </div>
    </ThemeContext.Provider>
  );
}
