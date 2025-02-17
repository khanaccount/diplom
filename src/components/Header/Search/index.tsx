import React, { useRef, useState } from "react";
import { Search as SearchIcon } from "lucide-react";
import { useClickAway } from "react-use";

import s from "./index.module.scss";

const refrigerators = [
  { name: "Холодильник 1", index: 1 },
  { name: "Холодильник 2", index: 2 },
  { name: "Холодильник 3", index: 3 },
  { name: "Холодильник 4", index: 4 },
  { name: "Холодильник 5", index: 5 },
  { name: "Холодильник 6", index: 6 },
  { name: "Холодильник 7", index: 7 },
  { name: "Холодильник 8", index: 8 },
  { name: "Холодильник 9", index: 9 },
];

export const Search: React.FC = () => {
  const [query, setQuery] = useState("");
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const ref = useRef(null);

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
        placeholder="Поиск товаров..."
        onChange={(e) => {
          setQuery(e.target.value);
          setIsOpen(e.target.value.length > 0);
        }}
      />

      {isOpen && filteredItems.length > 0 && (
        <div className={s.searchBlock}>
          {filteredItems.map((item) => (
            <div className={s.items} key={item.index}>
              {item.name}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};
