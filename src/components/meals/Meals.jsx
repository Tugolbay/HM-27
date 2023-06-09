import React, { useEffect } from "react";
import styled from "styled-components";
import { MealItem } from "./MealItem";
import { useDispatch, useSelector } from "react-redux";
import { getMeals } from "../../store/meals/mealsThunk";

export const Meals = () => {
  const { meals, isLoading } = useSelector((state) => state.meals);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getMeals());
  }, [dispatch]);

  return (
    <>
      <Container>
        <>
          {isLoading && "Loading..."}
          {meals?.map((meal) => (
            <MealItem key={meal._id} meal={meal} />
          ))}
        </>
      </Container>
    </>
  );
};

const Container = styled.div`
  background-color: #ffff;
  width: 80%;
  margin: 0 auto;
  margin-top: 150px;
  border-radius: 16px;
  padding: 40px;
`;
