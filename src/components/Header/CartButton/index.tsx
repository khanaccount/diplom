import React from "react";
import { ShoppingCart } from "lucide-react";
import s from "./index.module.scss";
import { Link } from "react-router";

export const CartButton: React.FC = () => {
  return (
    <Link to={"/cart"}>
      <button className={s.button}>
        <ShoppingCart size={20} />
      </button>
    </Link>
  );
};
