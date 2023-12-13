import React, {useState} from 'react';

const TodoList = ({todos}) =>{

  return (
    <div>
      {todos.map((todo) =>{
        return <todo todo={todo} key={todo}/>

      })
    }
    </div>
  )
}

export default TodoList;