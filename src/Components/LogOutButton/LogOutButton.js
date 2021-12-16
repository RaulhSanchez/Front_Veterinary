import { useNavigate } from "react-router-dom"
import { useEffect } from "react/cjs/react.development"
import { useState } from "react/cjs/react.production.min"
import APIConsumer from "../../Services/apiConsumer"
import store from "../../Store/store"


const LogOutButton = () => {
    const navigate = useNavigate()
    
    const LogOutButton = async () => {
        try{
            localStorage.removeItem("token")
            navigate("/home")
        }catch(error){
            console.log("error")
        }
    }
  
    
    return(
        <>
            <form className=" ">   
                <input onClick={()=>LogOutButton()} type="submit" value="LogOut" />
            </form>
        </>
    )
    
}

export default LogOutButton