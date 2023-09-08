/* eslint-disable react-hooks/rules-of-hooks */
// import React, { useState, useContext } from "react";
import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";


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
   
 
  state={
    text:''
  }

  
  SubmitForm (e) {
    e.preventDefault();
    this.props.add(this.state.text)
    
    this.setState({text:''}); // Clear input field after adding todo
  };
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
