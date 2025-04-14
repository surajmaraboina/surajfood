import { useState } from "react"

export const Header=()=>{
    const [Login,setLogout]=useState("Login")   
    return(
         <div className="Navi" >
            <div className="Logo">
    <img className="image" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQU0kpZlS_4b13Rl89YoidLvpLpZ2K1U5-f3g&s"/>
            </div>
            <div className="Navitems">
    <ul>
        <li> Home </li>
        <li> about </li>
        <li> contact </li>
        <li> Cart </li>
        <button className="Goinside" onClick={
            ()=>{
                setLogout(Login==="Login"?"Logout":"Login")
            }
        }>
            {Login}
        </button>
    </ul>
             </div>
    
        </div>
    )
    }