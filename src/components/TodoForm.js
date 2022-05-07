import React, { useState } from "react";
import { FormWrapper } from "../styles/TodoForm.styled";
import { collection, addDoc } from "firebase/firestore";
import { db } from "../firebase/config";

export default function TodoForm() {
  // Create initial state
  const [inputValue, setInputValue] = useState("");

  const handleChange = (e) => {
    e.preventDefault();
    setInputValue(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (inputValue !== "") {
      await addDoc(collection(db, "todos"), {
        inputValue,
        completed: false,
      });
      setInputValue("");
    }
  };

  const handleKeyDown = async (e) => {
    if (inputValue !== "" && e.key === "Enter") {
      await addDoc(collection(db, "todos"), {
        inputValue,
        completed: false,
      });
      setInputValue("");
    } else {
      return;
    }
  };

  return (
    <FormWrapper onSubmit={handleSubmit}>
      <input
        value={inputValue}
        type="text"
        placeholder="Add a todo"
        onChange={handleChange}
        onKeyDown={handleKeyDown}
      />
      <button onClick={handleSubmit} type="submit">
        +
      </button>
    </FormWrapper>
  );
}
