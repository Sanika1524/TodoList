import React from 'react'

function Todo({todo, index, deleteTodo }) {
  return (
    <div className="todo">
        <p>{todo}</p>
        <div className="actions">
          <input type="checkbox" name="" id="" />
          <button onClick={() => deleteTodo(index)}>DELETE</button>
        </div>
      </div>
  )
}

export default Todo