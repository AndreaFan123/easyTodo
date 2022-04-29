import React from "react";
import { RiCloseCircleLine, RiCheckboxCircleLine } from "react-icons/ri";
import {
  ListItemWrapper,
  IconWrapper,
  TodoWrapper,
} from "../styles/TodoItem.styled";

export default function TodoItems({ todo, removeTodo, completedTodo }) {
  return (
    <TodoWrapper>
      <ListItemWrapper
        style={{
          textDecoration: todo.completed ? "line-through" : "none",
        }}
      >
        {todo.text}
        <IconWrapper>
          <RiCheckboxCircleLine onClick={() => completedTodo(todo.id)} />
          <RiCloseCircleLine onClick={() => removeTodo(todo.id)} />
        </IconWrapper>
      </ListItemWrapper>
    </TodoWrapper>
  );
}
