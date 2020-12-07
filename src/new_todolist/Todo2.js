import React, { useState, useRef, use } from "react";
import Todolist2 from "./Todolist2";
// import TodoInsert2 from "./TodoInsert2";

const Todo2 = () => {
  const [todoInput, setTodoInput] = useState("");
  const [todo, setTodo] = useState([
    {
      id: 1,
      text: "리액트 공부",
      checked: false,
    },
    {
      id: 2,
      text: "노드 공부",
      checked: false,
    },
  ]);
  let nextId = useRef(3);

  const onClickfForm = (e) => {
    e.preventDefault();
    console.log("투두리스트 작성");
  };

  const onInsertHandler = () => {
    if (!todoInput) {
      alert("할 일을 입력해주세요");
      return;
    }
    const todos = { id: nextId.current++, text: todoInput, checked: false };
    setTodo(todo.concat(todos));
    // setTodo([
    //   ...todo,
    //   { id: nextId.current++, text: todoInput, checked: false },
    // ]);
    setTodoInput("");
  };

  const onChangeInput = (e) => {
    setTodoInput(e.target.value);
    console.log(e.target.value);
  };

  const onDeleteHandler = (todoId) => {
    setTodo(todo.filter((todos) => todos.id !== todoId));
  };

  const onCheckToggleHandler = (todoId) => {
    setTodo(todo.map(todos => todos.id === todoId ? {...todos, checked: !todos.checked} : todos));
  };

  const onEditHandler = (todoId) => {
  }

  return (
    <form type="submit" onSubmit={onClickfForm}>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <div style={{ fontSize: 50 }}>TO-DO-LIST</div>

        <div style={{ display: "flex" }}>
          <input
            style={{ maxWidth: 500, fontSize: 50 }}
            onChange={onChangeInput}
            value={todoInput}
          />
          <button onClick={onInsertHandler} style={{ width: 50 }} />
        </div>

        <Todolist2
          todo={todo}
          onDeleteHandler={onDeleteHandler}
          onCheckToggleHandler={onCheckToggleHandler}
        />
      </div>
    </form>
  );
};

export default React.memo(Todo2);
