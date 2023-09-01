import React from 'react';


function TodoList(props){
    return(
       
            <div className="col-6 mb-2">
            <div className="d-flex justify-content-between align-items-center border rounded p-3">
                <div>
                    {props.text}
                </div>
                <div>
                    <button type="button" className="btn btn-info btn-sm ms-2">edit</button>
                    <button type="button" className="btn btn-danger btn-sm ms-2">delete</button>
                </div>
            </div>
        </div>
    )
}

export default TodoList;

