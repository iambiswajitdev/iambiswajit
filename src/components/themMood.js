import React from "react";

const ThemMood = ({ setdarkMode, darkMode }) => {
  return (
    <div>
      <label className="switch">
        <input onChange={() => setdarkMode(!darkMode)} type="checkbox" />
        <span className="sliderss rounds">
          {darkMode ? (
            <img className="moodMoon" src="../images/sun3.png" alt="" />
          ) : (
            <img className="moodMoon" src="../images/moon.png" alt="" />
          )}
        </span>
      </label>
    </div>
  );
};

export default ThemMood;
