import React, { useRef, useState } from "react";
import { Search as SearchIcon } from "lucide-react";
import { useClickAway } from "react-use";
import refPng from "assets/refrigerators/pngegg.png";
import { useTranslation } from "react-i18next";

import s from "./index.module.scss";

const refrigerators = [
  {
    href: "/",
    name: "Холодильник Бирюса W980NF",
    image: refPng,
    id: 1,
  },
  {
    href: "/",
    name: "Холодильник Бирюса W980NF",
    image: refPng,
    id: 2,
  },
  {
    href: "/",
    name: "Холодильник Бирюса W980NF",
    image: refPng,
    id: 3,
  },
  {
    href: "/",
    name: "Холодильник Бирюса W980NF",
    image: refPng,
    id: 4,
  },
  {
    href: "/",
    name: "Холодильник Бирюса W980NF",
    image: refPng,
    id: 5,
  },
];

export const Search: React.FC = () => {
  const [query, setQuery] = useState("");
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const ref = useRef(null);
  const { t } = useTranslation();

  useClickAway(ref, () => {
    setIsOpen(false);
    setQuery("");
  });

  const filteredItems = refrigerators.filter((item) =>
    item.name.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <div className={s.search} ref={ref}>
      <SearchIcon className={s.icon} size={20} />
      <input
        className={s.input}
        value={query}
        type="text"
        placeholder={t("header.input.search")}
        onChange={(e) => {
          setQuery(e.target.value);
          setIsOpen(e.target.value.length > 0);
        }}
      />

      {isOpen && filteredItems.length > 0 && (
        <div className={s.searchBlock}>
          {filteredItems.map((item) => (
            <div className={s.items} key={item.id}>
              <img className={s.img} src={item.image} alt={item.name} />
              <p className={s.text}>{item.name}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};
