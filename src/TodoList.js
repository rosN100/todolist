import React, {useState} from 'react';

const TodoList = () =>{
    const [todos, setTodods] = useState([])
  return (
    <div>
      <h1>To-do list</h1>
      <input type="text"/>
      <button>Add T0-do</button>
      <button>clear completed</button>
      <p>0 left to-do</p>

    </div>
  )
}

export default TodoList;