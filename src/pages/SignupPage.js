import React from "react";
import { NavLink } from "react-router-dom";
import { FormContainer, FlexWrapper, Wrapper } from "../styles/Form.styled";

import { useState } from "react";
import { useSignup } from "../hooks/useSignup";

export default function SignupPage() {
  // init email, password, displayname states
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [displayName, setDisplayName] = useState("");
  const { signup, pending, error } = useSignup();

  // create handleSubmit func
  const handleSubmit = (e) => {
    e.preventDefault();

    signup(email, password, displayName);
  };

  return (
    <Wrapper>
      <FormContainer>
        <form onSubmit={handleSubmit}>
          <h2>
            <span>S</span>ignup
          </h2>

          {/* DisplayName */}
          <label>
            <span>Display Name:</span>
            <input
              type="text"
              value={displayName}
              onChange={(e) => setDisplayName(e.target.value)}
            />
          </label>

          {/* Email */}
          <label>
            <span>Email:</span>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              // style={{ borderColor: error ? "red" : "none" }}
            />
          </label>

          {/* Password */}
          <label>
            <span>Password:</span>
            <input
              type="password"
              value={password}
              placeholder="At least 6 digits"
              onChange={(e) => setPassword(e.target.value)}
              // style={{ borderColor: error ? "red" : "none" }}
            />
          </label>

          <FlexWrapper>
            {!pending && <button>Signup</button>}
            {pending && <button disabled>Registering</button>}
            <p>
              Already a member? <NavLink to="/login">Login</NavLink> here
            </p>
          </FlexWrapper>
          {error && <p style={{ color: "red" }}>{error}</p>}
        </form>
      </FormContainer>
    </Wrapper>
  );
}
