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
    const response = await axios.get(`http://localhost:5000/home`);
    return response.data;
  } catch (error) {
    return error;
  }
});
const apiSlice = createSlice({
  name: "apiSlice",
  initialState: {
    data: null,
    homeData: null,
  },
  extraReducers: (builder) => {
    builder.addCase(fetchData.fulfilled, (state, action) => {
      state.data = action.payload;
    });
    builder.addCase(fetchHomeData.fulfilled, (state, action) => {
      state.homeData = action.payload;
    });
  },
});

export default apiSlice.reducer;
