import React from "react";

const ProductCard = ({ data }) => {
  return (
    <div className="w-56 m-2 p-4 border-[1px] border-gray-300 bg-white">
      <img
        src={data.thumbnail}
        alt="product images"
        className="h-40 w-full object-cover"
      />
      <div className=" flex flex-col items-center justify-between my-2">
        <span>{data.category}</span>
        <span>{data.title}</span>
        <span>${data.price}</span>
        <span>{data.rating}</span>
        <button>add to cart</button>
      </div>
    </div>
  );
};

export default ProductCard;
