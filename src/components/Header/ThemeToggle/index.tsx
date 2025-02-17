import React, { useState } from "react";
import { Sun, Moon } from "lucide-react";
import s from "./index.module.scss";

export const ThemeToggle: React.FC = () => {
  const [isDark, setIsDark] = useState(false);

  const toggleTheme = () => {
    setIsDark((prev) => !prev);
    document.body.classList.toggle("dark-theme", !isDark);
  };

  return (
    <button className={s.button} onClick={toggleTheme}>
      {isDark ? <Sun size={20} /> : <Moon size={20} />}
    </button>
  );
};
