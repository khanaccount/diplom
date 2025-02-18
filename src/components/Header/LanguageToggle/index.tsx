import React from "react";
import { useTranslation } from "react-i18next";
import { Globe } from "lucide-react";
import s from "./index.module.scss";

export const LanguageToggle: React.FC = () => {
  const { i18n } = useTranslation();
  const currentLang = i18n.language === "ru" ? "RU" : "EN";

  const toggleLang = () => {
    const newLang = i18n.language === "ru" ? "en" : "ru";
    i18n.changeLanguage(newLang);
  };

  return (
    <button className={s.button} onClick={toggleLang}>
      <Globe size={20} />
      <div>{currentLang}</div>
    </button>
  );
};
