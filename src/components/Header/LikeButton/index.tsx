import React, { useRef, useState } from "react";
import { Heart } from "lucide-react";
import { Link } from "react-router";
import { useClickAway } from "react-use";
import s from "./index.module.scss";

const refrigerators = [
  {
    href: "/",
    name: "Холодильник 1",
    image:
      "https://biryusa.ru/up/opti/resizetmp/510_510_3/18b43097d9afe74809632b9de63126df/QVqQOxtvWTPjyXSuIgwSUsO4HJ8YkFhCPmd7Bvo5.jpg",
    id: 1,
  },
  {
    href: "/",
    name: "Холодильник 2",
    image:
      "https://biryusa.ru/up/opti/resizetmp/510_510_3/18b43097d9afe74809632b9de63126df/QVqQOxtvWTPjyXSuIgwSUsO4HJ8YkFhCPmd7Bvo5.jpg",
    id: 2,
  },
  {
    href: "/",
    name: "Холодильник 3",
    image:
      "https://biryusa.ru/up/opti/resizetmp/510_510_3/18b43097d9afe74809632b9de63126df/QVqQOxtvWTPjyXSuIgwSUsO4HJ8YkFhCPmd7Bvo5.jpg",
    id: 3,
  },
  {
    href: "/",
    name: "Холодильник 1",
    image:
      "https://biryusa.ru/up/opti/resizetmp/510_510_3/18b43097d9afe74809632b9de63126df/QVqQOxtvWTPjyXSuIgwSUsO4HJ8YkFhCPmd7Bvo5.jpg",
    id: 1,
  },
  {
    href: "/",
    name: "Холодильник 2",
    image:
      "https://biryusa.ru/up/opti/resizetmp/510_510_3/18b43097d9afe74809632b9de63126df/QVqQOxtvWTPjyXSuIgwSUsO4HJ8YkFhCPmd7Bvo5.jpg",
    id: 2,
  },
  {
    href: "/",
    name: "Холодильник 3",
    image:
      "https://biryusa.ru/up/opti/resizetmp/510_510_3/18b43097d9afe74809632b9de63126df/QVqQOxtvWTPjyXSuIgwSUsO4HJ8YkFhCPmd7Bvo5.jpg",
    id: 3,
  },
  {
    href: "/",
    name: "Холодильник 1",
    image:
      "https://biryusa.ru/up/opti/resizetmp/510_510_3/18b43097d9afe74809632b9de63126df/QVqQOxtvWTPjyXSuIgwSUsO4HJ8YkFhCPmd7Bvo5.jpg",
    id: 1,
  },
  {
    href: "/",
    name: "Холодильник 2",
    image:
      "https://biryusa.ru/up/opti/resizetmp/510_510_3/18b43097d9afe74809632b9de63126df/QVqQOxtvWTPjyXSuIgwSUsO4HJ8YkFhCPmd7Bvo5.jpg",
    id: 2,
  },
  {
    href: "/",
    name: "Холодильник 3",
    image:
      "https://biryusa.ru/up/opti/resizetmp/510_510_3/18b43097d9afe74809632b9de63126df/QVqQOxtvWTPjyXSuIgwSUsO4HJ8YkFhCPmd7Bvo5.jpg",
    id: 3,
  },
];

export const LikeButton: React.FC = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [likedItems, setLikedItems] = useState<number[]>([]);

  const ref = useRef(null);

  useClickAway(ref, () => {
    setIsOpen(false);
  });

  const toggleLike = (id: number) => {
    setLikedItems((prevLikedItems) =>
      prevLikedItems.includes(id)
        ? prevLikedItems.filter((item) => item !== id)
        : [...prevLikedItems, id]
    );
  };

  const openModal = () => {
    setIsOpen((prev) => !prev);
  };

  return (
    <div ref={ref} className={s.likeMenu}>
      <button onClick={openModal} className={s.button}>
        <Heart size={20} />
      </button>

      {isOpen && (
        <div className={s.likedList}>
          {refrigerators.map((item) => (
            <div key={item.id} className={s.item}>
              <Link to={item.href} className={s.href}>
                <img className={s.img} src={item.image} alt={item.name} />
                <p className={s.name}>{item.name}</p>
                <button className={s.likeButton} onClick={() => toggleLike(item.id)}>
                  <Heart
                    size={20}
                    fill={likedItems.includes(item.id) ? "red" : "none"}
                    stroke={likedItems.includes(item.id) ? "red" : "black"}
                  />
                </button>
              </Link>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};
