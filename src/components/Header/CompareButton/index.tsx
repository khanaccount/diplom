import React from "react";
import { Scale } from "lucide-react";
import s from "./index.module.scss";
import { Link } from "react-router";

export const CompareButton: React.FC = () => {
  return (
    <Link to={"/compare"}>
      <button className={s.button}>
        <Scale size={20} />
      </button>
    </Link>
  );
};
