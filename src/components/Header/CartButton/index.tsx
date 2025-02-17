import React from "react";
import { ShoppingCart } from "lucide-react";
import s from "./index.module.scss";

export const CartButton: React.FC = () => {
  return (
    <button className={s.button}>
      <ShoppingCart size={20} />
    </button>
  );
};
