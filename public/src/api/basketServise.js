import { axiosInstance } from "../config/axiosInstance";

export const getBasketRequest = () => {
  return axiosInstance.get("/basket");
};

export const putIncrementRequest = (payload) => {
  const requestData = {
    amount: payload.amount + 1,
  };
  return axiosInstance.put(`/basketItem/${payload.id}/update`, requestData);
};

export const putDecrementRequest = (payload) => {
  const requestData = {
    amount: payload.amount - 1,
  };
  return axiosInstance.put(`/basketItem/${payload.id}/update`, requestData);
};
export const deleteRequest = (id) => {
  return axiosInstance.delete(`/basketItem/${id}/delete`);
};
