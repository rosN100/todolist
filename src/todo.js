//rfc- to generate boiler plate code

import React from 'react'

export default function todo({todo}) {
  return (
    <div>
        <lable>
      <input type='checkbox' checked={todo.completet}/>
      {todo.item}
      </lable>
    </div>
  )
}
