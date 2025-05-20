import React from "react";
import Todo from "./Todo";

function TodoContainer({ todos , deleteTodo }) {
  return (
    <div className="task-container">
      {todos.map((todo, index) => {
        return <Todo todo={todo} index={index} deleteTodo={deleteTodo} />;
      })}
    </div>
  );
}

export default TodoContainer;
