import React from "react";

const authContext=React.createContext({
        statusLogin:false,
        login:()=>{},
        logOut:()=>{}

})


export default authContext