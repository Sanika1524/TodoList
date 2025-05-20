import React from "react";

function InputContainer({input, writeTodo, addTodo}) {
  return (
    <div className="input-container">
      <input type="text" placeholder="Enter Your Task" value={input}  onChange={writeTodo}/>
      <button onClick={addTodo}>+</button>
    </div>
  );
}

export default InputContainer;
