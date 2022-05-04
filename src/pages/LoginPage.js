import React from "react";
import { NavLink } from "react-router-dom";
import { FormContainer, FlexWrapper } from "../styles/Form.styled";

import { useLogin } from "../hooks/useLogin";
import { useState } from "react";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { login, pending, error } = useLogin();

  const handleSubmit = (e) => {
    e.preventDefault();

    login(email, password);
  };

  return (
    <FormContainer>
      <form onSubmit={handleSubmit}>
        <h2>
          <span>L</span>ogin
        </h2>
        {/* Email */}
        <label>
          <span>Email:</span>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </label>

        {/* Password */}
        <label>
          <span>Password:</span>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </label>

        <FlexWrapper>
          {!pending && <button>Login</button>}
          {pending && <button>Loading</button>}
          <p>
            Not a member? <NavLink to="/signup">Signup</NavLink> here
          </p>
        </FlexWrapper>
        {error && <p style={{ color: "red" }}>{error}</p>}
      </form>
    </FormContainer>
  );
}
