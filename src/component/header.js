 import React, { useContext } from "react";
 import 'bootstrap/dist/css/bootstrap.min.css'
 import authContext from "../Context/auth";

 function header(){
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const AuthContext=useContext(authContext)
    return(
<header>
            <div className="navbar navbar-dark bg-dark shadow-sm">
              
                    
                    <strong className="navbar-brand text-center">Todo App</strong>
                    {
                        !AuthContext.statusLogin
                        ?<button className="btn btn-success me-5" onClick={()=>AuthContext.login(true)} >login</button>
                        :<button className="btn btn-danger me-5" onClick={()=>AuthContext.logOut(false)}>logOut</button>

                    }
                    
                
            </div>
        </header>
    )
 }

 export default header