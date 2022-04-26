import React from "react";
import { Link } from "react-router-dom";

import { FcTodoList } from "react-icons/fc";
import { AddTodoStyle, AddTodoWrapper } from "../styles/Home.style";

export default function HomePage() {
  return (
    <AddTodoWrapper>
      <AddTodoStyle>
        <Link to="/lists">Add your todos here</Link>
        <FcTodoList size={3 + "rem"} />
      </AddTodoStyle>
    </AddTodoWrapper>
  );
}
