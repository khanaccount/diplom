import React from "react";

import s from "./index.module.scss";

export const Logo: React.FC = () => {
  return (
    <a href="/">
      <h1 className={s.logo}>холодос</h1>
    </a>
  );
};
