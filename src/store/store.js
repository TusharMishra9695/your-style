import { configureStore } from "@reduxjs/toolkit";
import cartSlice from "./slice/addCart";
import apiSlice from "./slice/apiSlice";

export const store = configureStore({
  reducer: {
    apiSlice,
    cartSlice,
  },
});
