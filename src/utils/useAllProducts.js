import { useEffect, useState } from "react";

const useAllProducts = (limit = 30) => {
  const [allProducts, setAllProducts] = useState(null);
  const [isLoading, setIsloading] = useState(true);

  useEffect(() => {
    getAllProducts();
  }, []);

  const getAllProducts = async () => {
    try {
      const response = await fetch(
        "https://dummyjson.com/products?limit=" + limit
      );
      const json = await response.json();
      setAllProducts(json.products);
    } catch (error) {}
    setIsloading(false);
  };

  return { isLoading, allProducts };
};

export default useAllProducts;
