import React, { useState } from "react";
import { Button, TextField } from "@mui/material";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { useDispatch } from "react-redux";
import { signUp } from "../store/auth/authThunc";
import { UserRoles } from "../constans/index";

export const SignUp = () => {
  const dispatch = useDispatch();
  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [confirmPassword, setConfirmPassword] = useState();

  const nameChangeHandler = (event) => {
    setName(event.target.value);
  };

  const emailChangeHandler = (event) => {
    setEmail(event.target.value);
  };
  const passwordChangeHandler = (event) => {
    setPassword(event.target.value);
  };
  const confirmChangeHandler = (event) => {
    setConfirmPassword(event.target.value);
  };
  const submitHandler = (event) => {
    event.preventDefault();
    const data = {
      name,
      email,
      password,
      confirmPassword,
      role: UserRoles.ADMIN,
    };
    dispatch(signUp(data));
  };
  return (
    <Container>
      <Form onSubmit={submitHandler}>
        <TextField value={name} onChange={nameChangeHandler} label="Name" />
        <TextField value={email} onChange={emailChangeHandler} label="Email" />
        <TextField
          type="password"
          value={password}
          onChange={passwordChangeHandler}
          label="Password"
        />
        <TextField
          value={confirmPassword}
          onChange={confirmChangeHandler}
          label="Confirm Password"
        />
        <Button type="submit" variant="contained">
          Sign Up
        </Button>
        <Link to="/signin">Have account?</Link>
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
