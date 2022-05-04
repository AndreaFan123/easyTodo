import React from "react";
import { useState } from "react";
import { NavLink } from "react-router-dom";
import TodoForm from "../components/TodoForm";
import TodoItems from "../components/TodoItems";
import { AddTodoWrapper } from "../styles/ListPage.styled";
import { useAuthContext } from "../hooks/useContext";

export default function ListPage() {
  const [todos, setTodos] = useState([]);
  const { user } = useAuthContext();

  const addTodo = (text) => {
    let id = 1;
    if (todos.length > 0) {
      id = todos[0].id + 1;
    }

    let todo = {
      id: id,
      text: text,
      completed: false,
    };
    let newTodos = [todo, ...todos];
    setTodos(newTodos);
  };

  const removeTodo = (id) => {
    let updateTodo = [...todos].filter((todo) => todo.id !== id);

    setTodos(updateTodo);
  };

  const completedTodo = (id) => {
    let updateTodo = todos.map((todo) => {
      if (todo.id === id) {
        todo.completed = !todo.completed;
      }
      return todo;
    });
    setTodos(updateTodo);
  };

  return (
    <AddTodoWrapper>
      <h2>{user.displayName}, add some todos</h2>
      <TodoForm addTodo={addTodo} />
      {todos.map((todo) => {
        return (
          <TodoItems
            todo={todo}
            key={todo.id}
            removeTodo={removeTodo}
            completedTodo={completedTodo}
            isCompleted={false}
          />
        );
      })}
      <NavLink to="/">
        <span>&larr;</span> Go back
      </NavLink>
    </AddTodoWrapper>
  );
}
