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
