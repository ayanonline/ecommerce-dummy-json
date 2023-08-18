import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  clearFilter,
  doFilter,
  setFilteredProducts,
} from "../../store/slice/productSlice";

const FiltersContainer = () => {
  const [price, setPrice] = useState(5000);
  const [brands, setBrands] = useState([]);
  const [ratings, setRatings] = useState(null);

  // subscribing products from store
  const { products } = useSelector((store) => store.products);
  const dispatch = useDispatch();

  useEffect(() => {
    filter();
  }, [brands, price, ratings]);

  // checkbox handler
  const checkBoxHandler = (e) => {
    let value = e.target.value;
    if (brands.includes(value)) {
      setBrands(brands.filter((item) => item != value));
    } else {
      setBrands((prev) => [...prev, value]);
    }
    if (brands.length < 1) {
      dispatch(clearFilter());
    }
  };

  // filter function
  const filter = () => {
    dispatch(doFilter());
    if (brands.length > 0) {
      console.log(ratings);
      if (ratings) {
        let newFilteredProducts = products.filter(
          (product) =>
            brands.includes(product.brand.toLowerCase()) &&
            product.price <= price &&
            product.rating >= ratings
        );
        dispatch(setFilteredProducts(newFilteredProducts));
      } else {
        let newFilteredProducts = products.filter(
          (product) =>
            brands.includes(product.brand.toLowerCase()) &&
            product.price <= price
        );
        dispatch(setFilteredProducts(newFilteredProducts));
      }
    } else {
      if (ratings) {
        let filteredProducts1 = products.filter(
          (product) => product.price <= price && product.rating >= ratings
        );
        dispatch(setFilteredProducts(filteredProducts1));
      } else {
        let filteredProducts1 = products.filter(
          (product) => product.price <= price
        );
        dispatch(setFilteredProducts(filteredProducts1));
      }
    }
  };
  // price handler
  const handleSlider = (e) => {
    setPrice(e.target.value);
  };

  //ratings handler
  const ratingsHandler = (e) => {
    if (ratings == e.target.value) {
      setRatings(null);
    } else {
      setRatings(e.target.value);
    }
  };

  return (
    <section className="w-1/5 h-[80vh] mr-6 p-4 shadow-lg ">
      <div className="flex justify-between mb-4">
        <span className="text-xl font-semibold">Filters</span>
        <span
          className="cursor-pointer text-blue-400"
          onClick={() => dispatch(clearFilter())}
        >
          CLERAR FILTERS
        </span>
      </div>

      <div>
        <span className="text-xl">Select brand</span>
        <div>
          <input
            className="mr-2"
            type="checkbox"
            value="samsung"
            onChange={checkBoxHandler}
          />
          <span>Samsung</span>
        </div>
        <div>
          <input
            className="mr-2"
            type="checkbox"
            value="apple"
            onChange={checkBoxHandler}
          />
          <span>Apple</span>
        </div>
        <div>
          <input
            className="mr-2"
            type="checkbox"
            value="oppo"
            onChange={checkBoxHandler}
          />
          <span>Oppo</span>
        </div>
      </div>
      <div className="my-4">
        <span className="text-xl">Max price: ${price}</span>
        <div>
          <input
            type="range"
            name="price"
            min={0}
            max={5000}
            value={price}
            onChange={handleSlider}
            className="w-full "
          />
        </div>
      </div>
      <div>
        <span className="text-xl">Customer's ratings</span>
        <div>
          <input
            type="checkbox"
            id="1"
            name="ratings"
            value={4.5}
            checked={ratings == 4.5}
            onChange={ratingsHandler}
            className="mr-2"
          />
          <span>4.5* & above</span>
        </div>
        <div>
          <input
            type="checkbox"
            id="1"
            name="ratings"
            value={4}
            checked={ratings == 4}
            onChange={ratingsHandler}
            className="mr-2"
          />
          <span>4* & above</span>
        </div>
      </div>
    </section>
  );
};

export default FiltersContainer;
