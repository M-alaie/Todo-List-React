/* eslint-disable react-hooks/rules-of-hooks */
// import React, { useState, useContext } from "react";
import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import TodoContext from "../Context/Context";
import axios from "axios" 

// function formAddTodo(props) {

// // console.log(useState);
 
//   const todosContext=useContext(TodoContext)
//   console.log(todosContext);

  
//   const [text,settext]=useState('')

  
//   let SubmitForm = (e) => {
//     e.preventDefault();
//     todosContext.add(text)
    
//     settext(""); // Clear input field after adding todo
//   };
//   const changeInput = function (e) {
//     settext(e.target.value)
//   };
//   return (
//     <form onSubmit={SubmitForm} className="form-inline">
//       <div className="form-group d-flex">
//         <input
//           type="text"
//           className="form-control mx-sm-3"
//           aria-label="input"
//           value={text}
//           placeholder="i want to do ..."
//           onChange={changeInput}
//         />
//         <button className="btn btn-primary ">add</button>
//       </div>
//     </form>
//   );
// }
class formAddTodo extends Component{
   
 static contextType=TodoContext
  state={
    text:''
  }
  SubmitForm (e) {
    e.preventDefault();
    // this.context.add(this.state.text)
    // ajax
    if(this.state.text.length > 1){
    let todo={
      text:this.state.text,
      isComplete:false
    }
    axios.post('https://todolist-985ee-default-rtdb.asia-southeast1.firebasedatabase.app/todo.json',todo)
    .then(response=>({todo:{...todo,key:response.data.name}}))
    .catch(error=>console.log(error))
    
    this.setState({text:''}); // Clear input field after adding todo
  };
 }
   changeInput(e){
    this.setState({
      text:e.target.value
    })
  };
  render() {
    return (
      <form onSubmit={this.SubmitForm.bind(this)} className="form-inline">
        <div className="form-group d-flex">
          <input
            type="text"
            className="form-control mx-sm-3"
            aria-label="input"
            value={this.state.text}
            placeholder="i want to do ..."
            onChange={this.changeInput.bind(this)}
          />
          <button className="btn btn-primary ">add</button>
        </div>
      </form>
    );
  }
}

export default formAddTodo;
