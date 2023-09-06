import React from "react";

const TodoContext=React.createContext({
    todos:[],
    edit:()=>{},
    done:()=>{},
    deleted:()=>{},
    add:()=>{}
    


})


export default TodoContext