import { useEffect, useState } from "react";

const useProductDetails = (productId) => {
  const [isLoading, setIsloading] = useState(true);
  const [productDetails, setProductDetails] = useState(null);

  useEffect(() => {
    getProductDetails();
  }, []);

  const getProductDetails = async () => {
    const res = await fetch("https://dummyjson.com/products/" + productId);
    const json = await res.json();
    setProductDetails(json);
    setIsloading(false);
  };
  return { isLoading, productDetails };
};
export default useProductDetails;
