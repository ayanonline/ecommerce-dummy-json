import React, { useRef, useState } from "react";
import { useParams } from "react-router-dom";
import useProductDetails from "../../utils/useProductDetails";
import { useDispatch } from "react-redux";
import { addToCart } from "../../store/slice/cartSlice";

const ProductsDetailsContainer = () => {
  const [quantity, setQuantity] = useState(1);
  const { productId } = useParams();
  const { isLoading, productDetails } = useProductDetails(productId);
  const targetImage = useRef(null);
  const dispatch = useDispatch();

  if (isLoading) return <h1>loading</h1>;

  return (
    <div className="md:my-10 md:mx-80 select-none flex flex-col md:flex-row">
      {/* gellary section */}
      <section className="w-[90vw] mx-auto md:w-3/4 border ">
        <div>
          <img
            ref={targetImage}
            src={productDetails.images[0]}
            alt="Product image"
            className="h-[15rem] md:h-[25rem] w-full object-contain"
          />
          <div className="flex px-2 justify-evenly border overflow-x-scroll snap-end scrollbar-none">
            {productDetails.images.map((item, index) => (
              <img
                key={index}
                src={item}
                alt="an image"
                className="h-24 w-24 m-2 border object-cover cursor-pointer"
                onMouseOver={(e) => {
                  targetImage.current.src = e.target.src;
                }}
              />
            ))}
          </div>
        </div>
      </section>
      {/* product details  */}
      <section className="md:w-2/4 px-6 flex flex-col">
        <span>Home/products/{productId}</span>
        <span>{productDetails.title}</span>
        <span>${productDetails.price}</span>
        <div className="flex">
          <div className="flex items-center">
            <button
              className="p-2 text-3xl"
              onClick={() => quantity > 1 && setQuantity(quantity - 1)}
            >
              -
            </button>
            <input
              type="text"
              name=""
              id=""
              value={quantity}
              onChange={(e) => {
                if (+e.target.value != 0) setQuantity(+e.target.value);
              }}
              className="w-[3rem] outline-none text-2xl text-center"
            />
            <button
              className="p-2 text-3xl"
              onClick={() => setQuantity(quantity + 1)}
            >
              +
            </button>
          </div>
          <button
            className="border ml-4 px-4"
            onClick={() => {
              dispatch(addToCart({ ...productDetails, quantity }));
            }}
          >
            Add to cart
          </button>
        </div>
      </section>
    </div>
  );
};

export default ProductsDetailsContainer;
