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
      <h1 className="text-center">Cart</h1>
      <div className="flex justify-between mx-[15vw]">
        <div>
          {cart.map((item) => (
            <CartProductCard key={item.id} product={item} />
          ))}
        </div>

        <div className="bg-white p-4 rounded-md w-[25vw]">
          <h1 className="font-semibold text-2xl">Price Details</h1>
          {cart.map((item) => (
            <div key={item.id} className="my-4 flex justify-between">
              <span className="mr-4 font-medium text-lg">
                {item.title} ({item.quantity})item
              </span>
              <span className="font-bold text-lg">
                ${item.price * item.quantity}
              </span>
            </div>
          ))}

          <hr className="mt-6 mb-2" />
          <div className="flex justify-between font-semibold text-xl">
            <span>Total</span>
            <span>${totalPrice}</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CartContainer;
