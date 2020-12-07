import React from "react";
import TodolistItem2 from "./TodolistItem2";

const Todolist2 = ({ todo, onDeleteHandler, onCheckToggleHandler }) => {
  return todo.map((todos,index) => (
    <div
      key={index}
      style={{
        border: "1px solid black",
        width: 500,
        height: 60,
      }}
    >
      <TodolistItem2
        key={todos.id}
        todos={todos}
        onDeleteHandler={onDeleteHandler}
        onCheckToggleHandler={onCheckToggleHandler}
      />
    </div>
  ));
};

export default Todolist2;
