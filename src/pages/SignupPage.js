import React from "react";
import { NavLink } from "react-router-dom";
import { FormContainer, FlexWrapper } from "../styles/Form.styled";

export default function SignupPage() {
  return (
    <FormContainer>
      <form>
        <h2>
          <span>S</span>ignup
        </h2>

        {/* DisplayName */}
        <label>
          <span>Display Name:</span>
          <input type="text" />
        </label>

        {/* Email */}
        <label>
          <span>Email:</span>
          <input type="email" />
        </label>

        {/* Password */}
        <label>
          <span>Password:</span>
          <input type="password" />
        </label>

        <FlexWrapper>
          <button>Login</button>
          <p>
            Already a member? <NavLink to="/login">Login</NavLink> here
          </p>
        </FlexWrapper>
      </form>
    </FormContainer>
  );
}
