import { useState, useEffect } from "react";

const useSpecificProducts = (category) => {
  const [allProducts, setAllProducts] = useState(null);
  const [isLoading, setIsloading] = useState(true);
  console.log(category);
  useEffect(() => {
    getAllProducts();
  }, []);

  const getAllProducts = async () => {
    try {
      const response = await fetch(
        "https://dummyjson.com/products/category/" + category
      );
      const json = await response.json();
      setAllProducts(json.products);
    } catch (error) {}
    setIsloading(false);
  };
  return { isLoading, allProducts };
};

export default useSpecificProducts;
