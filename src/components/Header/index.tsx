import React from "react";
import s from "./index.module.scss";

import { Search } from "./Search";
import { ThemeToggle } from "./ThemeToggle";
import { LanguageToggle } from "./LanguageToggle";
import { LikeButton } from "./LikeButton";
import { CompareButton } from "./CompareButton";
import { CartButton } from "./CartButton";
import { Logo } from "./Logo";

export const Header: React.FC = () => {
  return (
    <div className={s.headerBg}>
      <div className="container">
        <div className={s.header}>
          <Logo />
          <Search />
          <div className={s.controls}>
            <ThemeToggle />
            <LanguageToggle />
          </div>
          <div className={s.actions}>
            <LikeButton />
            <CompareButton />
            <CartButton />
          </div>
        </div>
      </div>
    </div>
  );
};
