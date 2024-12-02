import { createContext, useEffect, useState } from "react";

export const AppContext=createContext(null)

const AppContextProvider=(props)=>{
 

   const url='http://localhost:3000'

   const [token,setToken]=useState('')
    useEffect(()=>{
        if(localStorage.getItem('token')){
            setToken(localStorage.getItem('token'));
        }
    },[])
    const value={
            url,
            token,
            setToken,
    }
    return(
        <AppContext.Provider value={value}>
            {props.children}
        </AppContext.Provider>
    )
}
export default AppContextProvider

