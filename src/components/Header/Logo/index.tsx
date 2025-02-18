import React from "react";
import { useTranslation } from "react-i18next";

import s from "./index.module.scss";

export const Logo: React.FC = () => {
  const { t } = useTranslation();
  return (
    <a href="/">
      <h1 className={s.logo}>{t("header.logo.title")}</h1>
    </a>
  );
};
