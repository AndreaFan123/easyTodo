import React from "react";
import { NavLink } from "react-router-dom";
import { useLogout } from "../hooks/useLogout";
import { useAuthContext } from "../hooks/useContext";

import { NavWrapper } from "../styles/Nav.styled";

export default function Navbar() {
  const { logout } = useLogout();
  const { user } = useAuthContext();

  return (
    <NavWrapper>
      <nav>
        <NavLink exact="true" to="/">
          easyTodo
        </NavLink>
        <p>manage your daily tasks</p>
        {!user && (
          <div>
            <NavLink to="/login">Login</NavLink>
            <NavLink to="/signup">Signup</NavLink>
          </div>
        )}

        {user && (
          <div>
            <span>Hello, {user.displayName}</span>
            <button onClick={logout}>Logout</button>
          </div>
        )}
      </nav>
    </NavWrapper>
  );
}
