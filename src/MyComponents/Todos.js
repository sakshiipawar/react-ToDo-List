import React from "react";
import TodoItem from "./TodoItem";

const Todos = (props) => {
  let myStyle = {
    minHeight: "70vh",
    margin: "40px auto",
  };
  return (
    <div className="container my-3" style={myStyle}>
      <h3 className=" my-3">Todos List</h3>
      {props.todos.length === 0
        ? "No Todos to display"
        : props.todos.map((todo) => {
            return (
              <TodoItem todo={todo} key={todo.srno} onDelete={props.onDelete} />
            );
          })}
    </div>
  );
};

export default Todos;
