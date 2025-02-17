import React, { useState } from "react";
import { Globe } from "lucide-react";
import s from "./index.module.scss";

export const LanguageToggle: React.FC = () => {
  const [lang, setLang] = useState("RU");

  const toggleLang = () => {
    setLang((prev) => (prev === "RU" ? "EN" : "RU"));
  };

  return (
    <button className={s.button} onClick={toggleLang}>
      <Globe size={20} />
      <div>{lang}</div>
    </button>
  );
};
