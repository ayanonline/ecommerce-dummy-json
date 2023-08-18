import { createSlice } from "@reduxjs/toolkit";
import { login } from "../action/authAction";

const authSlice = createSlice({
  name: "auth",
  initialState: {
    isLogedIn: false,
    user: null,
  },
  extraReducers: (builder) => {
    builder
      .addCase(login.fulfilled, (state, action) => {
        state.isLogedIn = true;
        state.user = action.payload;
      })
      .addCase(login.rejected, (state, action) => {
        state.isLogedIn = false;
        state.user = null;
      });
  },
});

export default authSlice.reducer;
