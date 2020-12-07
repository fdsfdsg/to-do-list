import React, { useState } from "react";

const TodoInsert2 = ({ todo, setTodo, onInsertHandler, todoInput, setTodoInput }) => {

  const onChangeInput = (e) => {
    setTodoInput(e.target.value);
    console.log(e.target.value);
  };
  return (
    
  );
};

export default TodoInsert2;
