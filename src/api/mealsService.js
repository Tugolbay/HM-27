import { axiosInstance } from "../config/axiosInstance";

export const getMealsRequest = () => {
  return axiosInstance.get("/foods");
};

export const addItemRequest = (payload) => {
  const requestData = {
    amount: payload.amount,
  };
  return axiosInstance.post(`/foods/${payload.id}/addToBasket`, requestData);
};
