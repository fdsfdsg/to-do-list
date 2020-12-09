import React, { useState, useRef, useCallback } from "react";
import Todolist2 from "./Todolist2";
import TodoInsert2 from "./TodoInsert2";
import TodoHeader from "./TodoHeader";

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
      text: "노드공부",
      checked: true,
    },
  ]);
  let nextId = useRef(3);

  //   const setTestData = () => {
  //     let a = [];
  //     for (let i = 0; i < 1000; i++) {
  //       a.push({ id: nextId.current++, text: i, checked: false });
  //     }
  //     setTodo(a);
  //   };
  //   useEffect(() => {
  //     setTestData();
  //   }, []);
  const onClickfForm = useCallback(
    (e) => {
      e.preventDefault();
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
    },
    [todo, todoInput]
  );

  const onInsertHandler = useCallback(() => {
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
  }, [todo, todoInput]);

  const onChangeInput = (e) => {
    setTodoInput(e.target.value);
    console.log(e.target.value);
  };

  const onDeleteHandler = useCallback(
    (todoId) => {
      setTodo(todo.filter((todos) => todos.id !== todoId));
    },
    [todo]
  );

  const onCheckToggleHandler = useCallback(
    (todoId) => {
      setTodo(
        todo.map((todos) =>
          todos.id === todoId ? { ...todos, checked: !todos.checked } : todos
        )
      );
      console.log(todo);
    },
    [todo]
  );

  const onEditHandler = useCallback(
    (todoId, editedText) => {
      setTodo(
        todo.map((todos) =>
          todos.id === todoId ? { ...todos, text: editedText } : todos
        )
      );
      setTodoInput("");
    },
    [todo]
  );

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <TodoHeader todo={todo} />

      <TodoInsert2
        onClickfForm={onClickfForm}
        onChangeInput={onChangeInput}
        todoInput={todoInput}
      />

      <div style={{ overflowY: "auto", height: 650 }}>
        <Todolist2
          todo={todo}
          onDeleteHandler={onDeleteHandler}
          onCheckToggleHandler={onCheckToggleHandler}
          onEditHandler={onEditHandler}
        />
      </div>
    </div>
  );
};

export default Todo2;
