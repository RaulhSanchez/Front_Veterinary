import APIConsumer from "../../Services/apiConsumer"
import { useNavigate } from "react-router-dom"
import store from "../../Store/store"


const AdminLogin = () => {
    const navigate = useNavigate()
    const handleChanges = async (e) => {
        e.preventDefault()
        let result = await APIConsumer.loginUser(JSON.stringify({mail: e.target.mail.value, password: e.target.password.value,role:"admin"}))
            if(result.hashDescoted){
                store.dispatch({
                    type:"LOGIN",
                    payload:result.hashDescoted
                })
                navigate("/admin")
            }
    }   
    return (
        <div>
            <form className="form-style-4 "onSubmit={(e)=>handleChanges(e)}>
                <span>Acceso para Veterinarios</span>
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

export default AdminLogin
