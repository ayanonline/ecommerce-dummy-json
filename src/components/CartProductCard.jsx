import React from "react";
import { Link } from "react-router-dom";

const CartProductCard = ({ product }) => {
  return (
    <div className="mb-2 bg-white p-2 md:py-4 md:px-6 rounded-md max-w-[45vw] md:w-[30vw]">
      <div className="flex">
        <Link to={"/products/" + product.id}>
          <img
            src={product.thumbnail}
            alt="pimage"
            className="h-12 md:h-28 w-16 md:w-32 object-cover rounded-md"
          />
        </Link>

        <div className="flex justify-between w-full">
          <div className="ml-2 md:ml-4">
            <h1 className="font-semibold text-xs md:text-xl">
              {product.title.slice(0, 10) + "..."}
            </h1>
            <button className="text-xs md:text-xl">Remove</button>
          </div>
          <div className="font-semibold text-sm md:text-lg">
            ${product.price}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartProductCard;
