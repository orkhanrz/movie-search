import React, { useState } from "react";

const Header = () => {
  const [darkMode, setDarkMode] = useState(false);
  const toggleDarkMode = () => {
    setDarkMode((prevState) => !prevState);
  };

  console.log(darkMode);

  return (
    <header>
      <h3 className="header-logo">
        <span>Movie</span> Search
      </h3>
      <div className={`toggle ${darkMode && `dark`}`}>
        <div className="toggler" onClick={() => toggleDarkMode()}></div>
      </div>
    </header>
  );
};

export default Header;
