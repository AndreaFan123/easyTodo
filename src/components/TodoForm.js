import React, { useState } from "react";
import { BsPlusLg } from "react-icons/bs";
import { FormWrapper } from "../styles/TodoForm.styled";

export default function TodoForm({ addTodo }) {
  // Create initial state
  const [inputValue, setInputValue] = useState("");

  const handleChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    addTodo(inputValue);
    setInputValue("");
  };

  return (
    <FormWrapper onSubmit={handleSubmit}>
      <input
        value={inputValue}
        type="text"
        placeholder="Add a todo"
        onChange={handleChange}
      />
      <button onClick={handleSubmit} type="submit">
        +
      </button>
    </FormWrapper>
  );
}
