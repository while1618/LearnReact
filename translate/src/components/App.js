import React, { useState } from "react";

import LanguageContext from "../contexts/LanguageContext";
import ColorContext from "../contexts/ColorContext";
import UserCreate from "./UserCreate";

const App = () => {
  const [language, setLanguage] = useState("english");

  const text = language === "english" ? "Select a language:" : "Izaberi jezik:"

  return (
    <div className="ui container">
      <div>
        {text}
        <i className="flag gb uk" onClick={() => setLanguage("english")} />
        <i className="flag rs" onClick={() => setLanguage("serbian")} />
      </div>
      <LanguageContext.Provider value={language}>
        <ColorContext.Provider value="red">
          <UserCreate />
        </ColorContext.Provider>
      </LanguageContext.Provider>
    </div>
  );
};

export default App;
