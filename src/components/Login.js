import React, { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import API from "../API";
// Components
import Button from "./Button";
// Styles
import { Wrapper } from "./Login.styles";
// Context
import { Context } from "../context";

const Login = () => {
  const handleSubmit = () => {};

  const handleInput = (event) => {};

  return (
    <Wrapper>
      <label>Username:</label>
      <input
        type="text"
        value="state value"
        name="username"
        onChange={handleInput}
      />
      <input
        type="password"
        value="state value"
        name="password"
        onChange={handleInput}
      />
      <Button text="Login" callback={handleSubmit} />
    </Wrapper>
  );
};

export default Login;
