import React, { useState } from "react";
import { Input } from "antd";

const TodolistItem2 = ({
  todos,
  onDeleteHandler,
  onCheckToggleHandler,
  onEditHandler,
}) => {
  const [toggle, setToggle] = useState(true);
  const [edit, setEdit] = useState(todos.text);

  const onToggleHandler = (id) => {
    if (!toggle && todos.text !== edit) {
      onEditHandler(id, edit);
    }
    setToggle(!toggle);
  };

  const onChangeText = (e) => {
    setEdit(e.target.value);
  };

  const onChangeHandler = () => {
    if (!toggle) {
      return;
    }
    onCheckToggleHandler(todos.id);
  };

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        padding: 20,
        marginTop: 10,
        marginBottom: 10,
        backgroundColor: '#f0f0f0',
        borderRadius: 10,
      }}
    >
      <div
        onClick={onChangeHandler}
        style={{ display: "flex", flexDirection: "row" }}
      >
        {todos.checked && toggle ? (
          <>
            <div
              style={{ width: 20, height: 20, backgroundColor: "green" }}
            ></div>
            <div style={{ textDecoration: "line-through", marginLeft: 10 }}>
              {todos.text}
            </div>
          </>
        ) : toggle ? (
          <>
            <div
              style={{
                width: 20,
                height: 20,
                boxSizing: "border-box",
                border: "1px solid black",
                marginRight: 10,
              }}
            ></div>
            {todos.text}
          </>
        ) : (
          <Input
            onChange={onChangeText}
            value={edit}
          />
        )}
      </div>
      <div style={{ display: "flex", flexDirection: "row" }}>
        <div onClick={() => onToggleHandler(todos.id)}>
          {toggle ? "수정" : "적용"}
        </div>
        <div
          onClick={() => onDeleteHandler(todos.id)}
          style={{ marginRight: 20, marginLeft: 20 }}
        >
          삭제
        </div>
      </div>
    </div>
  );
};

export default React.memo(TodolistItem2);
