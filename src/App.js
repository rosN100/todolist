import React, { useState, useRef } from 'react';
import TodoList from "./TodoList"
function App() {
  const [todos, setTodods] = useState([]);
  const todoField = useRef();
  const handleAddToDos =()=>{
    const item = todoField.current.value;
    if (item === '') return
    console.log(item);
  }
  return (
    <div>
    <TodoList todos={todos}/>
     <h1>To-do list</h1>
      <input type="text" ref={todoField}/>
      <button onClick={handleAddToDos}>Add T0-do</button>
      <button>clear completed</button>
      <p>{todos.length}</p>
      </div>
  );
}

export default App;
