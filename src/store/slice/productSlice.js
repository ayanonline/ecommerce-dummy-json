import { createSlice } from "@reduxjs/toolkit";
import { getAllProducts } from "../action/productsAction";
const productSlice = createSlice({
  name: "products",
  initialState: {
    isLoading: true,
    isFiltered: false,
    products: [],
    filteredProducts: [],
  },
  reducers: {
    setFilteredProducts: (state, action) => {
      //   console.log(action.payload);
      state.filteredProducts = action.payload;
    },
    doFilter: (state) => {
      state.isFiltered = true;
    },
    clearFilter: (state) => {
      state.isFiltered = false;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getAllProducts.fulfilled, (state, action) => {
      state.isLoading = false;
      state.products = action.payload;
    });
  },
});
export const { setFilteredProducts, doFilter, clearFilter } =
  productSlice.actions;
export default productSlice.reducer;
