import React,{Component} from 'react';
import Headers from './component/header';
import FormAddTodo from './component/formAddTodo';
import TodoList from './component/TodoList';
import './App.css';
import Badge from 'react-bootstrap/Badge';

import 'bootstrap/dist/css/bootstrap.min.css'

class App extends Component {
 state={
  todos:[]
 }
 
  addTodo(text){
    let NewTodo = [{ id: Math.random(), isComplete: false, text: text }];
    this.setState(preState => {
      return { todos: [...preState.todos, ...NewTodo] };
    });
  }
  render(){
    let NewListTodos=this.state.todos.map(item=><TodoList text={item.text} key={item.id}></TodoList>)
    let pTageStyle={
      color:'red',
      fontSize:'20px'
      
    }
    return (
      <div className='App'>
       <Headers></Headers>
       <main>
             <section className='bg-light' >
               <div  className="container d-flex flex-column align-items-center">
                   <h1 >Welcome!</h1>
                   <p className="lead text-muted">To get started, add some items to your list:</p>
                   <FormAddTodo add={this.addTodo.bind(this)}></FormAddTodo>
               </div>
             </section>
             <div className="todosList mt-5">
                <div className="container">
                    <div className="d-flex flex-column align-items-center ">
                        <nav className="col-6 mb-3">
                            <div className="nav nav-tabs" id="nav-tab" role="tablist">
                                <a href='l' className="nav-item nav-link active font-weight-bold" id="nav-home-tab">undone <Badge bg='danger'>9</Badge></a>
                                <a href='k' className="nav-item nav-link font-weight-bold" id="nav-profile-tab">done <Badge bg='info'>9</Badge></a>
                            </div>
                        </nav>
                               {this.state.todos.length===0 ? <p style={pTageStyle}>there is no todo Here</p>:NewListTodos}
    
                    </div>
              
                </div>
          </div>
             
           </main>
      </div>
     );
   }
   
  }
 

export default App;
