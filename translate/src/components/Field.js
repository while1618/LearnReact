import React, { useContext } from "react";

import LanguageContext from "../contexts/LanguageContext";

const Field = () => {
  const language = useContext(LanguageContext);

  const text = language === "english" ? "Name" : "Ime";

  return (
    <div className="ui field">
      <label>{text}</label>
      <input type="text" />
    </div>
  );
};

export default Field;
