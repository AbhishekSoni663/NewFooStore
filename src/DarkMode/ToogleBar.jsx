import React from "react";
import '../DarkMode/toogle.css'
import { useEffect } from "react";
import { useState } from "react";
const ToogleBar = () => {
    const [theme, setTheme] = useState("light-theme");
    const toggleTheme = () => {
      theme === "dark-theme" ? setTheme("light-theme") : setTheme("dark-theme");
    };

    useEffect(() => {
        document.body.className = theme;
      }, [theme]);
  return (
    <>
      <div className="wrapper">
        <input type="checkbox" name="checkbox" className="switch" onClick={()=>toggleTheme()} />
      </div>
    </>
  );
};

export default ToogleBar;
