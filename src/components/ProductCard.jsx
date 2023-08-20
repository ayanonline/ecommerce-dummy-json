import React from "react";

const ProductCard = ({ data }) => {
  return (
    <div className="w-28 md:w-56 my-2 mx-1 md:mx-4 p-2 md:p-4 border-[1px] border-gray-300 bg-white">
      <img
        src={data.thumbnail}
        alt="product images"
        className="h-24 md:h-40 w-full object-cover"
      />
      <div className=" flex flex-col items-center justify-between my-2">
        {/* <span>{data.category}</span> */}
        <span className="text-xs md:text-base">{data.title}</span>
        <span className="text-xs md:text-sm">${data.price}</span>
        <span className="text-xs md:text-sm">{data.rating}</span>
        <button className="text-xs md:text-sm">add to cart</button>
      </div>
    </div>
  );
};

export default ProductCard;
