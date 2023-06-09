import React, { useState } from "react";
import { Button, TextField } from "@mui/material";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { useDispatch } from "react-redux";
import { signIn } from "../store/auth/authThunc";

export const SignIn = () => {
  const dispatch = useDispatch();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  const emailChangeHandler = (event) => {
    setEmail(event.target.value);
  };
  const passwordChangeHandler = (event) => {
    setPassword(event.target.value);
  };
  const submitHandler = (event) => {
    event.preventDefault();
    const data = {
      email,
      password,
    };
    dispatch(signIn(data));
  };

  return (
    <Container>
      <Form onSubmit={submitHandler}>
        <TextField value={email} onChange={emailChangeHandler} label="Email" />
        <TextField
          type="password"
          value={password}
          onChange={passwordChangeHandler}
          label="Password"
        />
        <Button type="submit" variant="contained">
          Sign In
        </Button>
        <Link to="/signup">Dont have</Link>
      </Form>
    </Container>
  );
};

const Container = styled.div`
  margin-top: 150px;
  margin-left: 500px;
  background-color: #fff;
  width: 500px;
  padding: 20px;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
`;
