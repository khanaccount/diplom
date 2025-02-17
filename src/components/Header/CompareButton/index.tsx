import React from "react";
import { Scale } from "lucide-react";
import s from "./index.module.scss";

export const CompareButton: React.FC = () => {
  return (
    <button className={s.button}>
      <Scale size={20} />
    </button>
  );
};
