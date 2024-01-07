import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchData = createAsyncThunk("fetchData", async () => {
  const response = await axios.get(
    `${process.env.REACT_APP_BASE_URL}/products`
  );
  return response.data;
});
export const fetchHomeData = createAsyncThunk("fetchHomeData", async () => {
  try {
    const response = await axios.get(`http://localhost:5000/nav-footer`);
    return response.data;
  } catch (error) {
    return error;
  }
});
const apiSlice = createSlice({
  name: "apiSlice",
  initialState: {
    data: null,
    navFooterData: null,
  },
  extraReducers: (builder) => {
    builder.addCase(fetchData.fulfilled, (state, action) => {
      state.data = action.payload;
    });
    builder.addCase(fetchHomeData.fulfilled, (state, action) => {
      state.navFooterData = action.payload;
    });
  },
});

export default apiSlice.reducer;
