import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

function formAddTodo(props) {
console.log(useState);
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [text,settext]=useState('')

  
  let formHandle = (e) => {
    e.preventDefault();
    props.add(text)
    
    settext(""); // Clear input field after adding todo
  };
  const changeInput = function (e) {
    settext(e.target.value)
  };
  return (
    <form onSubmit={formHandle} className="form-inline">
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
