import React from "react";
import useAllProducts from "../../utils/useAllProducts";
import ProductCard from "../ProductCard";
import { Link } from "react-router-dom";

const NewProductsContainer = () => {
  const { isLoading, allProducts } = useAllProducts(8);

  if (isLoading) {
    return <h1>loading</h1>;
  }
  return (
    <section className="my-2">
      <h1 className="text-center font-bold text-2xl underline mb-2">
        Recent Products
      </h1>
      <div className="flex mx-auto flex-wrap justify-center w-[70vw]">
        {allProducts.map((item) => (
          <Link key={item.id} to={"/products/" + item.id}>
            <ProductCard data={item} />
          </Link>
        ))}
      </div>
    </section>
  );
};

export default NewProductsContainer;
