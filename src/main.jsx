import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./store/store.js";
import MainContainer from "./components/containers/MainContainer.jsx";
import ProductsDetailsContainer from "./components/containers/ProductsDetailsContainer.jsx";
import ProductsContainer from "./components/containers/ProductsContainer.jsx";
import CartContainer from "./components/containers/CartContainer.jsx";
import SpecificProducts from "./components/categories/SpecificProducts.jsx";
import MultiCategoryProducts from "./components/categories/MultiCategoryProducts.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <MainContainer />,
      },
      {
        path: "products/",
        element: <ProductsContainer />,
      },
      {
        path: "grocery/",
        element: <SpecificProducts category="groceries" />,
      },
      {
        path: "mobiles/",
        element: <SpecificProducts category="smartphones" />,
      },
      {
        path: "fashion/",
        element: (
          <MultiCategoryProducts
            categoryList={[
              "fragrances",
              "skincare",
              "tops",
              "womens-dresses",
              "womens-shoes",
              "mens-shirts",
              "mens-shoes",
              "mens-watches",
              "womens-watches",
              "womens-bags",
              "womens-jewellery",
              "sunglasses",
            ]}
          />
        ),
      },
      {
        path: "electronics/",
        element: (
          <MultiCategoryProducts
            categoryList={["lighting", "laptops", "automotive"]}
          />
        ),
      },
      {
        path: "products/:productId",
        element: <ProductsDetailsContainer />,
      },
      {
        path: "cart",
        element: <CartContainer />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  // <React.StrictMode>
  <Provider store={store}>
    <RouterProvider router={router} />
  </Provider>
  // </React.StrictMode>
);
