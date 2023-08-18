import React from "react";
import { Link } from "react-router-dom";

const CartProductCard = ({ product }) => {
  return (
    <div className="my-2 bg-white py-4 px-6 rounded-md w-[30vw]">
      <div className="flex">
        <Link to={"/products/" + product.id}>
          <img
            src={product.thumbnail}
            alt="pimage"
            className="h-28 w-28 object-cover rounded-md"
          />
        </Link>

        <div className="flex justify-between w-full">
          <div className="ml-4">
            <h1 className="font-semibold text-xl">{product.title}</h1>
            <button>Remove form cart</button>
          </div>
          <div className="font-semibold text-lg">${product.price}</div>
        </div>
      </div>
    </div>
  );
};

export default CartProductCard;
