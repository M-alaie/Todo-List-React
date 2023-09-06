import React,{useContext, useState} from 'react';
import EditTodo from "./EditTodo"
import TodoContext from '../Context/Context';


function TodoList(props){
    let {item}=props

    const todoListContext=useContext(TodoContext)
    
    let deletedTodos=()=>{
        todoListContext.deleted(item.id)
    }
    let edithandler=(text)=>{
        todoListContext.edit(item.id,text)
        setEdit(false)
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
                    <button type="button" className={`btn  btn-sm ms-2 ${item.isComplete ?"btn-success":"btn-warning"}`} onClick={()=>todoListContext.done(item.id)} >{item.isComplete?'done' : 'undone'}</button>
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

