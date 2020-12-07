import React from "react";
import TodolistItem2 from "./TodolistItem2";

const Todolist2 = ({ todo, setTodo, onDeleteHandler, onCheckToggleHandler, onEditHandler }) => {
  return todo.map((todos,index) => (
    <div
      key={index}
      style={{
        border: "1px solid black",
        width: 500,
        height: '100%',
      }}
    >
      <TodolistItem2
        key={todos.id}
        todos={todos}
        setTodo={setTodo}
        onDeleteHandler={onDeleteHandler}
        onCheckToggleHandler={onCheckToggleHandler}
        onEditHandler={onEditHandler}
      />
    </div>
  ));
};

export default Todolist2;
