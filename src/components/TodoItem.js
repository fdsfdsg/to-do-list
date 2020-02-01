import React, { Component } from 'react';
import './TodoItem.css'
import $ from "jquery"

window.$ = $
window.jQuery = $

class TodoItem extends Component {

    shouldComponentUpdate(nextProps, nextState) {
        return this.props.checked !== nextProps.checked;
    }

    componentDidMount(){
        $('.create-button').on('click',function() { //이걸누르면
            localStorage.setItem("input", $('input').val());
        fetch();
        });
        
        function fetch() {  //id="storage"인게 바뀐다
            $('#storage').html(localStorage.getItem('input'));
        }
        
        fetch();
    }

    render() {
        const { text, checked, id, onToggle, onRemove } = this.props;

        console.log(id); //값을 입력할때마다 렌더 함수가 실행되는지 보려고
/*
        let obj = {
            text : 'asd'
        }
        localStorage.myinfo = JSON.stringify(obj);
        JSON.parse(localStorage.myinfo);
        localStorage.clear();
*/
        //local storage 적용

        
        return (
            
            <div className="todo-item" onClick={() => onToggle(id)}>
                <div className="remove" onClick={(e) => {
                    e.stopPropagation(); // onToggle 이 실행되지 않도록 함
                    onRemove(id);
                }
                }>&times;</div>
            
                <div className={`todo-text ${checked && 'checked'}`}>
                    <div>{text}</div>
                </div>
                {
                    checked && (<div className="check-mark">✓</div>)
                }
            </div>
        );
    }
}

export default TodoItem;