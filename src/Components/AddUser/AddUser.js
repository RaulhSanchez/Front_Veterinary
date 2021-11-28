import { useNavigate } from "react-router-dom"
import APIConsumer from "../../Services/apiConsumer"
import "./AddUser.scss"


const AddUser = () => {
    const navigate = useNavigate()
    const handleChange = async (e) => {
        e.preventDefault()
        await APIConsumer.registerUser(JSON.stringify({"name":e.target.name.value ,"mail":e.target.mail.value,"password":e.target.password.value,/*"phone":e.target.phone.value,"age":e.target.age.value,"adress":e.target.adress.value*/}))
        navigate("/login")
    }
    return(
        <form className="form" onSubmit={(e) => handleChange(e)}>
            <div className="form">            
                <input type="text" name="name" placeholder="Añada su nombre" required/>
            </div>            
            <div className="form">
                <input type="text" name="mail" placeholder="Añada su Email" required/>
            </div>            
            <div className="form">
                <input type="password" name="password" placeholder="Añada su contraseña" />
            </div>
            {/* <div className="form">
                <input type="text" name="phone" placeholder="Añada su telefono" required/>
            </div>
            <div className="form">
                <input type="text" name="age" placeholder="Añada su edad" required/>
            </div> 
            <div className="form">
                <input type="text" name="adress" placeholder="Añada su direccion" required/>
            </div>  */}
            <div className="form">
                <input type="submit" value="Registrarse" className="btn"/>
            </div>
        </form>
    )
}

export default AddUser