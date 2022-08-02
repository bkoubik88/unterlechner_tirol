import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  currentOrder: {},
};

export const artSlice = createSlice({
  name: "userOrder",
  initialState,
  reducers: {
    saveOrder: (state, action) => {
      state.currentOrder = action.payload;
    },
    deleteOrder: (state) => {
      state.currentOrder = {};
    },
  },
});

export const { saveOrder, deleteOrder } = artSlice.actions;

export default artSlice.reducer;
