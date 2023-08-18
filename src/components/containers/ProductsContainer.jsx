import React, { useEffect, useState } from "react";
import useAllProducts from "../../utils/useAllProducts";
import { Link } from "react-router-dom";
import ProductCard from "../ProductCard";
import FiltersContainer from "./FiltersContainer";
import { useDispatch, useSelector } from "react-redux";
import { getAllProducts } from "../../store/action/productsAction";

const ProductsContainer = () => {
  const dispatch = useDispatch();
  const { isLoading, isFiltered, products, filteredProducts } = useSelector(
    (store) => store.products
  );
  useEffect(() => {
    dispatch(getAllProducts(12));
  }, []);

  if (isLoading) return <h1>loading</h1>;
  return (
    <div>
      <h1 className="text-center">All products</h1>
      <main className="flex mx-28">
        {/* filter section */}
        <FiltersContainer allProducts={products} />
        {/* product list section */}
        <section className="flex flex-wrap w-4/5">
          {isFiltered
            ? filteredProducts.map((item) => (
                <Link key={item.id} to={"/products/" + item.id}>
                  <ProductCard data={item} />
                </Link>
              ))
            : products.map((item) => (
                <Link key={item.id} to={"/products/" + item.id}>
                  <ProductCard data={item} />
                </Link>
              ))}
        </section>
      </main>
    </div>
  );
};

export default ProductsContainer;
