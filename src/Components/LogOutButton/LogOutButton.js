import { useNavigate } from "react-router-dom"
import APIConsumer from "../../Services/apiConsumer"
import store from "../../Store/store"


const LogOutButton = () => {
    const navigate = useNavigate()
    const handleChanges = async (e) => {
        
        let result = await APIConsumer.logOut()
       if("token"=== true){
           console.log("Errr")
        }else{
        navigate("/home")
        }
    }
    return(
        <>
            <form className="form-style-4 "onSubmit={(e)=>handleChanges(e)}>   
                <input type="submit" value="LogOut" />
            </form>
        </>
    )
    
}

export default LogOutButton