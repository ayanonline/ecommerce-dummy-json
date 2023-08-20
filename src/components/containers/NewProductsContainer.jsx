import React from "react";
import useAllProducts from "../../utils/useAllProducts";
import ProductCard from "../ProductCard";
import { Link } from "react-router-dom";
import ShimmerProductCard from "../ShimmerProductCard";

const NewProductsContainer = () => {
  const { isLoading, allProducts } = useAllProducts(8);

  return (
    <section className="my-2">
      <h1 className="text-center font-bold md:text-2xl underline mb-2">
        Recent Products
      </h1>
      <div className="flex mx-auto flex-wrap justify-center md:w-[70vw]">
        {isLoading
          ? Array(8)
              .fill(null)
              .map((item, index) => <ShimmerProductCard key={index} />)
          : allProducts.map((item) => (
              <Link key={item.id} to={"/products/" + item.id}>
                <ProductCard data={item} />
              </Link>
            ))}
      </div>
    </section>
  );
};

export default NewProductsContainer;
