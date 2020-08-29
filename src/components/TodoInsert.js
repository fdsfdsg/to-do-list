import React, { useState, useCallback } from "react";
import { MdAdd } from "react-icons/md";
import "./TodoInsert.scss";
const TodoInsert = ({ onInsert, onChangeInput, input }) => {

  const onChange = useCallback((e) => {
    onChangeInput(e.target.value);
  }, []);

  const onSubmit = useCallback(
    (e) => {
      onInsert(input);
      onChangeInput("");
      e.preventDefault();
    },
    [onInsert, input]
  );

  return (
    <form className="TodoInsert" onSubmit={onSubmit}>
      <input
        placeholder="할일을 입력해주세요"
        value={input}
        onChange={onChange}
      />
      <button type="submit">
        <MdAdd />
      </button>
    </form>
  );
};

export default React.memo(TodoInsert);
