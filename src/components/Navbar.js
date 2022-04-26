import React from "react";
import { Link } from "react-router-dom";
import { NavStyle, NavWrapper } from "../styles/Navbar.styled";

export default function Navbar() {
  return (
    <NavWrapper>
      <NavStyle>
        <Link to="/">easyTodo</Link>
        <p>manage your daily tasks</p>
      </NavStyle>
    </NavWrapper>
  );
}
