import React from "react";
import{useState ,useEffect,useContext} from 'react'
const MyContext= React.createContext();
const ContextProvider=({child})=>{
    const [val,setval]=React.useState(0);
    const [val1,setval1]=React.useState(0);
    const [val2,setval2]=React.useState(0);
       return(
        <MyContext.Provider value={{
            val,setval,
            val1,setval1,
            val2,setval2,
        }}>
            {child}
        </MyContext.Provider>
       )
}

export {MyContext,ContextProvider};