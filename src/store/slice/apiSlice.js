import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchData = createAsyncThunk("fetchData", async () => {
  const response = await axios.get(
    `${process.env.REACT_APP_BASE_URL}/products`
  );
  return response.data;
});

const apiSlice = createSlice({
  name: "apiSlice",
  initialState: {
    data: null,
  },
  extraReducers: (builder) => {
    builder.addCase(fetchData.fulfilled, (state, action) => {
      state.data = action.payload;
    });
  },
});

export default apiSlice.reducer;
