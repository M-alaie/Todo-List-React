/* eslint-disable react-hooks/rules-of-hooks */
import React, { useState, useContext } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import TodoContext from "../Context/Context";

function formAddTodo(props) {

// console.log(useState);
 
  const todosContext=useContext(TodoContext)
  console.log(todosContext);

  
  const [text,settext]=useState('')

  
  let SubmitForm = (e) => {
    e.preventDefault();
    todosContext.add(text)
    
    settext(""); // Clear input field after adding todo
  };
  const changeInput = function (e) {
    settext(e.target.value)
  };
  return (
    <form onSubmit={SubmitForm} className="form-inline">
      <div className="form-group d-flex">
        <input
          type="text"
          className="form-control mx-sm-3"
          aria-label="input"
          value={text}
          placeholder="i want to do ..."
          onChange={changeInput}
        />
        <button className="btn btn-primary ">add</button>
      </div>
    </form>
  );
}

export default formAddTodo;
