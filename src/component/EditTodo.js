import React,{ useState} from "react";
import 'bootstrap/dist/css/bootstrap.css'


function EditTodo(props){
    // eslint-disable-next-line react-hooks/rules-of-hooks
   
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [text,settext]=useState(props.text)
    let inputhandler=e=>{
        settext(e.target.value)
    }
    return(
        <div className="col-6 mb-2">
        <div className="d-flex justify-content-between align-items-center border rounded p-3">
            <div>
               <input type="text" value={text} onChange={inputhandler} className="form-control" />
            </div>
            <div>
            
            <button type="button" className="btn btn-info btn-sm ms-2"  onClick={()=>props.edit(text)}>edit</button>
                
            </div>
        </div>
    </div>
    )
}


export default EditTodo