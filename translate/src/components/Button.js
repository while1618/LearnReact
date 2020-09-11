import React, { useContext } from "react";

import LanguageContext from "../contexts/LanguageContext";

const Button = () => {
  const language = useContext(LanguageContext);

  const text = language === "english" ? "Save" : "Sacuvaj";

  return (
    <button className="ui button primary">{text}</button>
  );
};

export default Button;
