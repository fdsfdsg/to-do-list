import React from "react";
import { Button, Input } from "antd";

const TodoInsert2 = ({ onInsertHandler, todoInput, onChangeInput }) => {
  return (
    <div style={{ display: "flex" }}>
      <Input
        style={{ maxWidth: 500, fontSize: 20 }}
        onChange={onChangeInput}
        value={todoInput}
      />
      <Button onClick={onInsertHandler} size={'large'} >
        추가
      </Button>
    </div>
  );
};

export default TodoInsert2;
