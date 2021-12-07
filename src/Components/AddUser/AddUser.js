import { useNavigate } from "react-router-dom"
import APIConsumer from "../../Services/apiConsumer"
import "./AddUser.scss"


const AddUser = () => {
    const navigate = useNavigate()
    const handleChange = async (e) => {
        e.preventDefault()
        await APIConsumer.registerUser(JSON.stringify({"name":e.target.name.value ,"email":e.target.mail.value,"password":e.target.password.value,"phone":e.target.phone.value,"age":e.target.age.value,"adress":e.target.adress.value}))
        navigate("/login")
    }
    return(
        <form className="form-style-4" onSubmit={(e) => handleChange(e)}>
            <label className="field1">            
                <input type="text" name="name" placeholder="Añada su nombre" required/>
            </label>            
            <label className="field1">
                <input type="mail" name="email" placeholder="Añada su Email" required/>
            </label>            
            <label className="field2">
                <input type="password" name="password" placeholder="Añada su contraseña" />
            </label>
            <label className="field1">
                <input type="text" name="phone" placeholder="Añada su telefono" required/>
            </label>
            <label className="field1">
                <input type="text" name="age" placeholder="Añada su edad" required/>
            </label> 
            <label className="field1">
                <input type="text" name="adress" placeholder="Añada su direccion" required/>
            </label>
            <label className="form">
                <input type="submit" value="Registrarse" className="btn"/>
            </label>
        </form>
    )
}

export default AddUser