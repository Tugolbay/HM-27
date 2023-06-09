import { createAsyncThunk } from "@reduxjs/toolkit";
import {
  deleteRequest,
  getBasketRequest,
  putDecrementRequest,
  putIncrementRequest,
} from "../../api/basketServise";
import { addItemRequest } from "../../api/mealsService";

export const getBasket = createAsyncThunk(
  "basket/getBasket ",
  async (_, { rejectWithValue }) => {
    try {
      const response = await getBasketRequest();
      const { data } = response?.data;
      return data?.items;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

export const addItem = createAsyncThunk(
  "basket/addItem ",
  async (payload, { dispatch, rejectWithValue }) => {
    try {
      const response = await addItemRequest(payload);

      dispatch(getBasket());

      return await response?.items;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

export const incrementFood = createAsyncThunk(
  "basket/putIncrementFood",
  async (payload, { dispatch, rejectWithValue }) => {
    try {
      const response = await putIncrementRequest(payload);

      dispatch(getBasket());

      return await response?.items;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

export const decrementFood = createAsyncThunk(
  "basket/putDecrementFood",
  async (payload, { dispatch, rejectWithValue }) => {
    if (payload.amount !== 0) {
      try {
        const response = await putDecrementRequest(payload);

        dispatch(getBasket());

        return await response?.items;
      } catch (error) {
        return rejectWithValue(error);
      }
    } else {
      try {
        const response = await deleteRequest(payload.id);

        dispatch(getBasket());

        return await response?.items;
      } catch (error) {
        return rejectWithValue(error);
      }
    }
  }
);
