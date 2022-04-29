import React from "react";
import { NavLink } from "react-router-dom";

import { NavWrapper } from "../styles/Nav.styled";

export default function Navbar() {
  return (
    <NavWrapper>
      <nav>
        <NavLink exact="true" to="/">
          easyTodo
        </NavLink>
        <p>manage your daily tasks</p>
      </nav>
    </NavWrapper>
  );
}
