import { createContext, useEffect, useState } from "react";
import axios from 'axios'
export const AppContext=createContext(null)

const AppContextProvider=(props)=>{
 

   const url='http://localhost:3000'

   const [token,setToken]=useState('')
   const[reports,setReports]=useState([])

   const fetchReport=async ()=>{
    const response= await axios.post(url+'/api/show');
    setReports(response.data.data)
   }
    useEffect(()=>{
        // async function reportFetch (){
        //     await fetchReport()
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

