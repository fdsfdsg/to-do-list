import React, { useState } from "react";

const TodolistItem2 = ({ todos, onDeleteHandler, onCheckToggleHandler }) => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        margin: 20,
      }}
    >
      <div onClick={() => onCheckToggleHandler(todos.id)} style={{ display: "flex", flexDirection: "row" }}>
        {todos.checked ? (
          <>
            <div
              style={{ width: 20, height: 20, backgroundColor: "green" }}
            ></div>
            <div style={{ textDecoration: "line-through", marginLeft: 10 }}>{todos.text}</div>
          </>
        ) : (
          <>
            <div
              style={{ width: 20, height: 20, boxSizing:'border-box', border: "1px solid black" }}
            ></div>
            <div style={{ marginLeft: 10}}>{todos.text}</div>
          </>
        )}
      </div>
      <div style={{ display: "flex", flexDirection: "row" }}>
        <div>수정</div>
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

export default TodolistItem2;
