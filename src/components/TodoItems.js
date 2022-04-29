import React from "react";
import { RiCloseCircleLine, RiCheckboxCircleLine } from "react-icons/ri";
import { ListItemWrapper, IconWrapper } from "../styles/TodoItem.styled";

export default function TodoItems({ todo, removeTodo, completedTodo }) {
  return (
    <ListItemWrapper>
      {todo.text}
      <IconWrapper>
        <RiCheckboxCircleLine onClick={() => completedTodo(todo.id)} />
        <RiCloseCircleLine onClick={() => removeTodo(todo.id)} />
      </IconWrapper>
    </ListItemWrapper>
  );
}
