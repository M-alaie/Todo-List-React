import React,{useContext, useState} from 'react';
import EditTodo from "./EditTodo"
import TodoContext from '../Context/Context';
import todoAPI from "../Axios/todoApl"


function TodoList(props){
    let {item}=props

    const todoListContext=useContext(TodoContext)
    
    let deletedTodos=()=>{
        todoAPI.delete(`todo/${item.key}.json`)
        .then(Response=>{console.log(Response.data);
            todoListContext.deleted(item.key)
        }
        )
        .catch(err=>console.log(err))
    }
   
    
    let edithandler=(text)=>{
        todoAPI.put(`todo/${item.key}.json`,{isComplete:item.isComplete,text:text})
        .then(Response=>console.log(Response))
        todoListContext.edit(item.key,text)
        setEdit(false)
    }
    let doneHandler=()=>{
        todoAPI.put(`todo/${item.key}.json`,{isComplete:!item.isComplete,text:item.text})
        .then(Response=>console.log(Response))
        todoListContext.done(item.key)

    }

   const [edit,setEdit]=useState(false)
    return(
       
            <>
            {
                edit===false ?(<div className="col-6 mb-2">
                <div className="d-flex justify-content-between align-items-center border rounded p-3">
                    <div>
                        {item.text}
                    </div>
                    <div>
                    <button type="button" className={`btn  btn-sm ms-2 ${item.isComplete ?"btn-success":"btn-warning"}`} onClick={doneHandler} >{item.isComplete?'done' : 'undone'}</button>
                    <button type="button" className="btn btn-info btn-sm ms-2"  onClick={()=> setEdit(true)}>edit</button>
    
                        
                        <button type="button" className="btn btn-danger btn-sm ms-2 " onClick={deletedTodos}>delete</button>
                    </div>
                </div>
            </div>)
            :
            <EditTodo  text={item.text} edit={edithandler} />
            }

            </>
      
    )
}

export default TodoList;

