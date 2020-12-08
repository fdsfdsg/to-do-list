import React from "react";

const TodoInsert2 = ({ onInsertHandler, todoInput, onChangeInput }) => {
  return (
    <div style={{ display: "flex" }}>
      <input
        style={{ maxWidth: 500, fontSize: 50 }}
        onChange={onChangeInput}
        value={todoInput}
      />
      <button onClick={onInsertHandler} style={{ width: 50 }} />
    </div>
  );
};

export default TodoInsert2;
