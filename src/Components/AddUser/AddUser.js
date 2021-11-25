import { useNavigate } from "react-router-dom"
import APIConsumer from "../../Services/apiConsumer"
import "./AddUser.scss"


const AddUser = () => {
const navigate = useNavigate()
    const handleChange = async (e) => {
        e.preventDefault()
        await APIConsumer.registerUser(JSON.stringify({"name":e.target.name.value,"email":e.target.email.value,"password":e.target.password.value}))
        navigate("/login")
    }
    return(
        <form className="form" onSubmit={ (e) => handleChange(e)}>
            <div className="form">            
                <input type="text" name="name" placeholder="Añada su nombre" required/>
            </div>            
            <div className="form">
                <input type="text" name="email" placeholder="Añada su Email" required/>
            </div>            
            <div className="form">
                <input type="password" name="password" placeholder="Añada su contraseña" />
            </div>
            <div className="form">
                <label>¿Está de acuerdo con los términos y condiciones?</label>
            </div>
            <div className="form">
                <input type="submit" value="Registrarse" className="btn"/>
            </div>
        </form>
    )
}

export default AddUser