// cartSlice.js
import { createSlice } from "@reduxjs/toolkit";

const INITIAL_STATE = {
  cartList: [],
};

const cartSlice = createSlice({
  name: "cart",
  initialState: INITIAL_STATE,
  reducers: {
    addTocart: (state, action) => {
      const product = action.payload;
      const existingItem = state.cartList.find((item) => item.id === product.id);

      if (existingItem) {
        existingItem.count++;
      } else {
        state.cartList.push({
          ...product,
          count: 1,
        });
      }
    },
    increment: (state, action) => {
      const productId = action.payload;
      const item = state.cartList.find((item) => item.id === productId);

      if (item) {
        item.count++;
      }
    },
    decrement: (state, action) => {
      const productId = action.payload;
      const item = state.cartList.find((item) => item.id === productId);

      if (item && item.count > 1) {
        item.count--;
      } else if (item) {
        // Remove the item from the cart if count becomes 0
        state.cartList = state.cartList.filter((item) => item.id !== productId);
      }
    },
  },
});

export const { addTocart, increment, decrement } = cartSlice.actions;

export default cartSlice.reducer;
