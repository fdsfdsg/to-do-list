import React from 'react';
import './Form.css'

const Form = ({ value, onChange, onCreate, onKeyPress }) => {
    return (
        
        <div className="form">
            <input value={value} onChange={onChange} onKeyPress={onKeyPress} />
            
            <div className="create-button" onClick={onCreate}>
                추가
            </div>
           
        </div>
      
    )
}


export default Form;

/*
<input type="text"> <button>add</button>
<div id="storage"></div>


$('button').on('click',function() {
  localStorage.setItem("input", $('input').val());
  fetch();
});

function fetch() {
  $('#storage').html(localStorage.getItem('input'));
}

fetch(); // fetch on load
*/