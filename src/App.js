import React, { useState } from 'react';
import TodoList from "./TodoList"
function App() {
  const [todos, setTodods] = useState([])
  return (
    <TodoList todoItem={todos}/>
  );
}

export default App;
