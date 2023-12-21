import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cartSlice",
  initialState: {
    value: [],
  },
  reducers: {
    amounttoAdd: (state, action) => {
      let item = {
        quantity: 0,
        quantityDetail: "",
      };
      item.quantity = parseInt(action.payload.quantity);
      item.quantityDetail = action.payload.data;
      state.value.push(item);
    },
    amounttoRemove: (state, action) => {
      let pushonArry = [];
      state.value.filter(
        (item) =>
          item.quantityDetail.id != action.payload && pushonArry.push(item)
      );
      state.value = pushonArry;
    },
  },
});
export const { amounttoAdd, amounttoRemove } = cartSlice.actions;
export default cartSlice.reducer;
