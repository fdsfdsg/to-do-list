import React from "react";
import "./TodoInsert.scss";
import "./TodoListItem.scss";
import TodoList from "./TodoList";
import TodoTemplate from "./TodoTemplate";
import TodoInsert from "./TodoInsert";

const Todos = ({
  input, // 인풋에 입력되는 텍스트
  todos, // 할 일 목록이 들어있는 객체
  onChangeInput,
  onInsert,
  onToggle,
  onRemove,
}) => {
  return (
    <TodoTemplate>
      <TodoInsert onInsert={onInsert} onChangeInput={onChangeInput} input={input} />
      <TodoList todos={todos} onRemove={onRemove} onToggle={onToggle} />
    </TodoTemplate>
  );
};

export default Todos;
