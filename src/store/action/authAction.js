import { createAsyncThunk, isRejectedWithValue } from "@reduxjs/toolkit";

export const login = createAsyncThunk(
  "auth/login",
  async (userData, { rejectWithValue }) => {
    try {
      const data = await fetch("https://dummyjson.com/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          username: userData.username,
          password: userData.password,
          // expiresInMins: 60, // optional
        }),
      });
      const json = await data.json();
      if (data.status === 200) {
        return json;
      } else {
        throw new Error(json.message);
      }
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);
