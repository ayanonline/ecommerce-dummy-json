import React from "react";
import { AiFillHeart, AiOutlineShoppingCart } from "react-icons/ai";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import Search from "./Search";

const Header = () => {
  const cartQuantity = useSelector((store) => store.cart.length);
  return (
    <header className="my-4 px-4 sticky top-0 bg-white">
      <div className="md:w-3/5 mx-auto flex justify-between items-center">
        <Link to="/" className="text-base md:text-xl font-bold">
          My-shop
        </Link>
        <Search />
        {/* cart & wishlist */}
        <div className="flex items-center">
          <Link>
            <AiFillHeart className="ml-4 h-6 w-6 cursor-pointer" />
          </Link>
          <Link to="/cart" className="flex">
            <AiOutlineShoppingCart className="ml-4 h-6 w-6 cursor-pointer" />
            {cartQuantity}
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
