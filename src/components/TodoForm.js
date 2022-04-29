import React, { useState } from "react";

export default function TodoForm() {
  // Create initial state
  const [input, setinput] = useState("");
  return (
    <form>
      <input value={input} placeholder="Add a todo"></input>
    </form>
  );
}
