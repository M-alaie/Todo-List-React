/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { PureComponent } from "react";
import Headers from "./component/header";
import FormAddTodo from "./component/AddTodo";
import TodoList from "./component/TodoList";
import "./App.css";
import Badge from "react-bootstrap/Badge";
import "bootstrap/dist/css/bootstrap.min.css";

// import Context

import TodoContext from "./Context/Context";

class App extends PureComponent {
  state = {
    todos: [],
    statusDone: false,
  };

  addTodo(text) {
    let NewTodo = [{ id: Math.random(), isComplete: false, text: text }];
    this.setState((preState) => {
      return { todos: [...preState.todos, ...NewTodo] };
    });
    console.log(...NewTodo);
  }
  toggleBadge(status) {
    this.setState({ statusDone: status });
  }
  // deletedTodos
  dleted(key) {
    this.setState((preState) => {
      return {
        todos: preState.todos.filter((item) => item.id !== key),
      };
    });
  }
  changeDone(key) {
    let findTodos = this.state.todos.find((item) => item.id === key);
    let filterTodos = this.state.todos.filter((item) => item.id !== key);
    findTodos.isComplete =! findTodos.isComplete;

    this.setState({
      todos: [...filterTodos, findTodos],
    });
    console.log(findTodos);
    console.log(filterTodos);
  }

  EditTodo(key,text){
    let EditTodoFind=this.state.todos.find((find)=>find.id===key)
    console.log(EditTodoFind);
    EditTodoFind.text=text


    let filterTodos = this.state.todos.filter((item) => item.id !== key);

    console.log(filterTodos);
    this.setState({
      todos:[...filterTodos,EditTodoFind]
    })
  }

  render() {
    // let NewListTodos=this.state.todos.map(item=><TodoList text={item.text} key={item.id}></TodoList>)

    let filterTodos = this.state.todos.filter(
      (item) => item.isComplete === this.state.statusDone
    );

    let NewListTodos = filterTodos.map((item) => (
      <TodoList item={item}></TodoList>
    ));

    let pTageStyle = {
      color: "red",
      fontSize: "20px",
    };
    return (
      <TodoContext.Provider
        value={{
          todos: this.state.todos,
          add: this.addTodo.bind(this),
          deleted: this.dleted.bind(this),
          done: this.changeDone.bind(this),
          edit:this.EditTodo.bind(this)
        }}
      >
        <div className="App">
          <Headers></Headers>
          <main>
            <section className="bg-light">
              <div className="container d-flex flex-column align-items-center">
                <h1>Welcome!</h1>
                <p className="lead text-muted">
                  To get started, add some items to your list:
                </p>
                <FormAddTodo></FormAddTodo>
              </div>
            </section>
            <div className="todosList mt-5">
              <div className="container">
                <div className="d-flex flex-column align-items-center ">
                  <nav className="col-6 mb-3">
                    <div className="nav nav-tabs" id="nav-tab" role="tablist">
                      <a
                        href="#"
                        className={`nav-item nav-link active font-weight-bold ${
                          this.state.statusDone === false ? "active" : ""
                        }`}
                        id="nav-home-tab"
                        onClick={this.toggleBadge.bind(this, false)}
                      >
                        {" "}
                        undone
                        <Badge bg="danger">
                          {
                            this.state.todos.filter(
                              (items) => items.isComplete === false
                            ).length
                          }
                        </Badge>
                      </a>
                      <a
                        href="#"
                        className={`nav-item nav-link active font-weight-bold ${
                          this.state.statusDone ? "active" : ""
                        }`}
                        id="nav-profile-tab"
                        onClick={this.toggleBadge.bind(this, true)}
                      >
                        done{" "}
                        <Badge bg="info">
                          {
                            this.state.todos.filter(
                              (items) => items.isComplete === true
                            ).length
                          }
                        </Badge>
                      </a>
                    </div>
                  </nav>
                  {/* {this.state.todos.length===0 ? <p style={pTageStyle}>there is no todo Here</p>:NewListTodos} */}
                  {filterTodos.length === 0 ? (
                    <p style={pTageStyle}>there is no todo Here</p>
                  ) : (
                    NewListTodos
                  )}
                </div>
              </div>
            </div>
          </main>
        </div>
      </TodoContext.Provider>
    );
  }
}

export default App;
