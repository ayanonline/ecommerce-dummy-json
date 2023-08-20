import { useState, useEffect } from "react";

const useFashionProducts = (categoryList) => {
  const [allProducts, setAllProducts] = useState([]);
  const [isLoading, setIsloading] = useState(true);

  useEffect(() => {
    // getAllProducts();
    categoryList.forEach((element) => {
      getAllProducts(element);
    });
  }, []);

  const getAllProducts = async (category) => {
    try {
      const response = await fetch(
        "https://dummyjson.com/products/category/" + category
      );
      const json = await response.json();
      setAllProducts((prev) => [...prev, ...json.products]);
    } catch (error) {}
    setIsloading(false);
  };
  return { isLoading, allProducts };
};

export default useFashionProducts;
