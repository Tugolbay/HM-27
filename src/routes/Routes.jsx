import React from "react";
import { Route, Routes } from "react-router-dom";
import { UserLayout } from "../layout/UserLayout";
import { SignUp } from "../pages/SignUp";
import { SignIn } from "../pages/SignIn";

import { MealLayout } from "../layout/MealLayout";

export const MealRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<UserLayout />}>
        <Route index element={<MealLayout />}></Route>
        <Route path="signup" element={<SignUp />}></Route>
        <Route path="signin" element={<SignIn />}></Route>
      </Route>
    </Routes>
  );
};
