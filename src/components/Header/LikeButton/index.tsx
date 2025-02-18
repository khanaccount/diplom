import React from "react";
import { Heart } from "lucide-react";
import { Link } from "react-router";

import s from "./index.module.scss";

export const LikeButton: React.FC = () => {
  return (
    <Link to={"/like"}>
      <button className={s.button}>
        <Heart size={20} />
      </button>
    </Link>
  );
};
