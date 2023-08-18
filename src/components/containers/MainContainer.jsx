import React from "react";
import NewProductsContainer from "./NewProductsContainer";
import { Link } from "react-router-dom";

const MainContainer = () => {
  return (
    <div className="m-10">
      <Link to="/products">All products</Link>
      <NewProductsContainer />
    </div>
  );
};

export default MainContainer;
