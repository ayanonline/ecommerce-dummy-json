import React from "react";
import useAllProducts from "../../utils/useAllProducts";
import ProductCard from "../ProductCard";
import { Link } from "react-router-dom";

const NewProductsContainer = () => {
  const { isLoading, allProducts } = useAllProducts(5);

  if (isLoading) {
    return <h1>loading</h1>;
  }
  return (
    <section className="h-screen">
      <h1 className="text-center">New arrived</h1>
      <div className="flex flex-wrap justify-center">
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
