import React, { useState } from "react";
import Main from "./components/Main";
import { ModeContext } from "./Context";

const App = () => {
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode((prevState) => !prevState);
  };

  return (
    <div className="container">
      <header className={`${darkMode && `dark`}`}>
        <h3 className="header-logo">
          <span>Movie</span> Search
        </h3>
        <div className={`toggle ${darkMode && `dark`}`}>
          <div className="toggler" onClick={() => toggleDarkMode()}></div>
        </div>
      </header>
      <ModeContext.Provider value={darkMode}>
        <Main />
      </ModeContext.Provider>
    </div>
  );
};

export default App;
