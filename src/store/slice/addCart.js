import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cartSlice",
  initialState: {
    quantity: 0,
    quantityDetail: "",
  },
  reducers: {
    amounttoAdd: (state, action) => {
      state.quantity = parseInt(action.payload.quantity);
      state.quantityDetail = action.payload.data;
    },
  },
});
export const { amounttoAdd } = cartSlice.actions;
export default cartSlice.reducer;
