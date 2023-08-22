import React from "react";
import { useSelector } from "react-redux";
import CartProductCard from "../CartProductCard";

const CartContainer = () => {
  const cart = useSelector((store) => store.cart);

  if (cart.length < 1) {
    return null;
  }
  const totalPrice = cart.reduce(
    (total, product) => total + product.price * product.quantity,
    0
  );
  console.log(totalPrice);

  return (
    <section className="h-screen bg-gray-50">
      <h1 className="text-center text-2xl my-4">Cart</h1>
      <div className="flex justify-between mx-4 md:mx-[15vw]">
        <div>
          {cart.map((item) => (
            <CartProductCard key={item.id} product={item} />
          ))}
        </div>

        <div className="bg-white p-2 md:p-4 rounded-md max-w-[45vw] md:w-[25vw] h-fit">
          <h1 className="font-semibold text-xs md:text-2xl">Price Details</h1>
          {cart.map((item) => (
            <div key={item.id} className="my-4 flex justify-between">
              <span className="mr-4 font-medium text-xs md:text-lg">
                {item.title} ({item.quantity})item
              </span>
              <span className="font-bold text-xs md:text-lg">
                ${item.price * item.quantity}
              </span>
            </div>
          ))}

          <hr className="mt-6 mb-2" />
          <div className="flex justify-between font-semibold text-xs md:text-xl">
            <span>Total</span>
            <span>${totalPrice}</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CartContainer;
