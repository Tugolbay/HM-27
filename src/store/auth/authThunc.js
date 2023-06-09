import { createAsyncThunk } from "@reduxjs/toolkit";
import authService from "../../api/authService";
import { STORAGE_AUTH } from "../../constans/index";

export const signUp = createAsyncThunk(
  "auth/signUp",
  async (payload, { rejectWithValue }) => {
    try {
      const { data } = await authService.signUp(payload);
      localStorage.setItem(STORAGE_AUTH.AUTH, JSON.stringify(data.data));
      return data.data;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

export const signIn = createAsyncThunk(
  "auth/signIn",
  async (payload, { rejectWithValue }) => {
    try {
      const { data } = await authService.signIn(payload);
      localStorage.setItem(STORAGE_AUTH.AUTH, JSON.stringify(data.data));
      return data.data;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);
