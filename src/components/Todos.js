import React from "react";
import {
    MdCheckBoxOutlineBlank,
    MdCheckBox,
    MdRemoveCircleOutline,
  } from "react-icons/md";
  import "./TodoListItem.scss";
import cn from "classnames";


const TodoListItem = ({ todo,onRemove, onToggle }) => {
  const { id, text, checked } = todo;
  return (
    <div className="TodoListItem">
      <div className={cn("checkbox", { checked })} onClick={() => onToggle(id)}>
        {checked ? <MdCheckBox /> : <MdCheckBoxOutlineBlank />}
        <div className="text">{text}</div>
      </div>
      <div className="remove" onClick={()=>onRemove(id)}>
        <MdRemoveCircleOutline />
      </div>
    </div>
  );
};

const Todos = ({
    input, // 인풋에 입력되는 텍스트
    todos, // 할 일 목록이 들어있는 객체
    onChangeInput,
    onInsert,
    onToggle,
    onRemove,
  }) => {
    const onSubmit = e => {
      e.preventDefault();
      onInsert(input);
      onChangeInput(''); // 등록 후 인풋 초기화
    };
    const onChange = e => onChangeInput(e.target.value);
    return (
      <div>
        <form onSubmit={onSubmit}>
          <input value={input} onChange={onChange} />
          <button type="submit">등록</button>
        </form>
        <div>
          {todos.map(todo => (
            <TodoListItem
              todo={todo}
              key={todo.id}
              onToggle={onToggle}
              onRemove={onRemove}
            />
          ))}
        </div>
      </div>
    );
  };
  
  export default Todos;