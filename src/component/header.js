 import React, { } from "react";
 import 'bootstrap/dist/css/bootstrap.min.css'
 
 function header(props){
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const {statusLogin,login,logOut}=props
    return(
<header>
            <div className="navbar navbar-dark bg-dark shadow-sm">
              
                    
                    <strong className="navbar-brand text-center">Todo App</strong>
                    {
                        !statusLogin
                        ?<button className="btn btn-success me-5" onClick={()=>login(true)} >login</button>
                        :<button className="btn btn-danger me-5" onClick={()=>logOut(false)}>logOut</button>

                    }
                    
                
            </div>
        </header>
    )
 }

 export default header