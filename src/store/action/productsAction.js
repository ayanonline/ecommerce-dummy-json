import { createAsyncThunk } from "@reduxjs/toolkit";

export const getAllProducts = createAsyncThunk(
  "products/getAllProducts",
  async (limit = 12) => {
    try {
      const response = await fetch(
        "https://dummyjson.com/products?limit=" + limit
      );
      const json = await response.json();
      return json.products;
    } catch (error) {}
  }
);
