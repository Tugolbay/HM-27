import { createSlice } from "@reduxjs/toolkit";
import { getBasket } from "./basketThunk";

export const ActionTypeBasket = {
  NEW_MEALS: "NEW_MEALS",
  GET_MEALS_PENDING: "GET_MEALS_PENDING",
  GET_MEALS_SUCCESS: "GET_MEALS_SUCCESS",
  ERROR_MEALS: "ERROR_MEALS",
};

const initialState = {
  items: [],
};

export const basketSlice = createSlice({
  name: "basket",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getBasket.fulfilled, (state, action) => {
      state.items = action.payload;
    });
  },
});

export const ActionsType = basketSlice.actions;
