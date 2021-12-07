import APIConsumer from "../../Services/apiConsumer"
import { useNavigate } from "react-router-dom"
import store from "../../Store/store"
import ("./LoginUser.scss")

const LoginUser = () => {
    const navigate = useNavigate()
    const handleChanges = async (e) => {
        e.preventDefault()
        let result = await APIConsumer.loginUser(JSON.stringify({mail: e.target.mail.value, password: e.target.password.value}))        
        console.log(result, 'TOKEN' )
        console.log(result.hashDescoted)
        
        if(result.hashDescoted){
            store.dispatch({
                type:"LOGIN",
                payload:result.hashDescoted
            })
            navigate("/profile")
        }        
    }   
    return (
        <div>
            <form className="form-style-4 "onSubmit={(e)=>handleChanges(e)}>
                <label >
                    <span>Añade tu Mail</span><input type="email" name="mail" required />
                </label>
                <label >
                    <span>Añade tu Contraseña</span><input type="password" name="password" required/>
                </label>
                <label>
                    <span> </span><input type="submit" value="Login" />
                </label>
            </form>
        </div>
    )
}

export default LoginUser
