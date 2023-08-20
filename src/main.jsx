import React, { Suspense, lazy } from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./store/store.js";
import MainContainer from "./components/containers/MainContainer.jsx";
// import ProductsDetailsContainer from "./components/containers/ProductsDetailsContainer.jsx";
// import ProductsContainer from "./components/containers/ProductsContainer.jsx";
// import CartContainer from "./components/containers/CartContainer.jsx";
// import SpecificProducts from "./components/categories/SpecificProducts.jsx";
// import MultiCategoryProducts from "./components/categories/MultiCategoryProducts.jsx";

const ProductsDetailsContainer = lazy(() =>
  import("./components/containers/ProductsDetailsContainer.jsx")
);
const ProductsContainer = lazy(() =>
  import("./components/containers/ProductsContainer.jsx")
);
const CartContainer = lazy(() =>
  import("./components/containers/CartContainer.jsx")
);
const SpecificProducts = lazy(() =>
  import("./components/categories/SpecificProducts.jsx")
);
const MultiCategoryProducts = lazy(() =>
  import("./components/categories/MultiCategoryProducts.jsx")
);

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
        element: (
          <Suspense fallback={<h1>Loading...</h1>}>
            <ProductsContainer />
          </Suspense>
        ),
      },
      {
        path: "grocery/",
        element: (
          <Suspense fallback={<h1>Loading...</h1>}>
            <SpecificProducts category="groceries" categoryTitle="Grocery" />
          </Suspense>
        ),
      },
      {
        path: "mobiles/",
        element: (
          <Suspense fallback={<h1>Loading...</h1>}>
            <SpecificProducts category="groceries" categoryTitle="Grocery" />
          </Suspense>
        ),
      },
      {
        path: "fashion/",
        element: (
          <Suspense fallback={<h1>Loading...</h1>}>
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
              categoryTitle="Fashions"
            />
          </Suspense>
        ),
      },
      {
        path: "electronics/",
        element: (
          <Suspense fallback={<h1>Loading...</h1>}>
            <MultiCategoryProducts
              categoryTitle="Electronics"
              categoryList={["lighting", "laptops", "automotive"]}
            />
          </Suspense>
        ),
      },
      {
        path: "products/:productId",
        element: (
          <Suspense fallback={<h1>Loading...</h1>}>
            <ProductsDetailsContainer />
          </Suspense>
        ),
      },
      {
        path: "cart",
        element: (
          <Suspense fallback={<h1>Loading...</h1>}>
            <CartContainer />
          </Suspense>
        ),
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
