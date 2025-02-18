import React from "react";
import s from "./index.module.scss";
import { useTranslation } from "react-i18next";
import { Link } from "react-router";

export const AuthBtn: React.FC = () => {
  const { t } = useTranslation();
  return (
    <>
      <Link to={"/auth"}>
        <button className={s.logIn}>{t("header.auth.login")}</button>
      </Link>
      <Link to={"/auth"}>
        <button className={s.register}>{t("header.auth.register")}</button>
      </Link>
    </>
  );
};
