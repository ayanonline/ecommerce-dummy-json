import React from "react";
import { AiFillHeart, AiOutlineShoppingCart } from "react-icons/ai";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const Header = () => {
  const cartQuantity = useSelector((store) => store.cart.length);
  return (
    <header className="p-4 ">
      <nav className="w-3/5 mx-auto flex justify-between">
        <Link to="/">My-shop</Link>
        <div className="border">
          <input type="text" />
          <button className="border-l-2">Search</button>
        </div>
        <div className="flex items-center">
          <Link>
            <AiFillHeart className="ml-4 h-6 w-6 cursor-pointer" />
          </Link>
          <Link to="/cart" className="flex">
            <AiOutlineShoppingCart className="ml-4 h-6 w-6 cursor-pointer" />
            {cartQuantity}
          </Link>
        </div>
      </nav>
    </header>
  );
};

export default Header;
