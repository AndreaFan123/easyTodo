import React from "react";
import { NavLink } from "react-router-dom";
import { FormContainer, FlexWrapper } from "../styles/Form.styled";

export default function LoginPage() {
  return (
    <FormContainer>
      <form>
        <h2>
          <span>L</span>ogin
        </h2>
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
            Not a member? <NavLink to="/signup">Signup</NavLink> here
          </p>
        </FlexWrapper>
      </form>
    </FormContainer>
  );
}
