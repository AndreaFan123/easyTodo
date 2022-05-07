import React from "react";
import { RiCloseCircleLine, RiCheckboxCircleLine } from "react-icons/ri";
import {
  ListItemWrapper,
  IconWrapper,
  TodoWrapper,
  CheckIconStyle,
  CloseIconStyle,
} from "../styles/TodoItem.styled";

export default function TodoItems({ todo, removeTodo, completedTodo }) {
  return (
    <TodoWrapper>
      <ListItemWrapper
        style={{
          textDecoration: todo.completed ? "line-through" : "none",
        }}
      >
        {todo.inputValue}
        <IconWrapper>
          <RiCheckboxCircleLine
            style={CheckIconStyle}
            onClick={() => completedTodo(todo.id)}
          />
          <RiCloseCircleLine
            style={CloseIconStyle}
            onClick={() => removeTodo(todo.id)}
          />
        </IconWrapper>
      </ListItemWrapper>
    </TodoWrapper>
  );
}
