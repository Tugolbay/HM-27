import { createSlice } from "@reduxjs/toolkit";
import { UserRoles } from "../../constans/index";
import { signIn, signUp } from "./authThunc";

const initialState = {
  isAuthorized: false,
  token: "",
  user: {
    role: UserRoles.ADMIN,
    email: "",
    name: "",
  },
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  extraReducers: (builder) => {
    builder.addCase(signUp.fulfilled, (state, { payload }) => {
      state.isAuthorized = true;
      state.token = payload.token;
      state.user = {
        name: payload.name,
        email: payload.user.email,
        role: payload.user.role,
      };
    });
    builder.addCase(signIn.fulfilled, (state) => {
      state.isAuthorized = true;
    });
  },
});

export default authSlice;
