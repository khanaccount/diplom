import React from "react";
import s from "./index.module.scss";

import { Search } from "./Search";
import { LanguageToggle } from "./LanguageToggle";
import { LikeButton } from "./LikeButton";
import { CompareButton } from "./CompareButton";
import { CartButton } from "./CartButton";
import { Logo } from "./Logo";
import { AuthBtn } from "./AuthBtn";
import { useLocation } from "react-router";

export const Header: React.FC = () => {
  const location = useLocation();
  const isAuthPage = location.pathname === "/auth";

  return (
    <div className={s.headerBg}>
      <div className="container">
        <div className={s.header}>
          <Logo />
          <Search />
          <div className={s.controls}>
            <LanguageToggle />
          </div>
          <div className={s.actions}>
            <LikeButton />
            <CompareButton />
            <CartButton />
          </div>
          {!isAuthPage && (
            <div className={s.auth}>
              <AuthBtn />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
