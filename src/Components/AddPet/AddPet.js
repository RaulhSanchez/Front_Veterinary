import { useNavigate } from "react-router-dom"
import APIConsumer from "../../Services/apiConsumer"


const AddPet = () => {
    const navigate = useNavigate()
    const handleChange = async(e) => {
        e.preventDefault()
        await APIConsumer.registerPet(JSON.stringify({"name":e.target.name.value,"mascota":e.target.mascota.value}))
        navigate("/pet")
    }
    return(
        <form className="form" onSubmit={(e) => handleChange(e)}>
            <div className="form">            
                <input type="text" name="name" placeholder="Añada su nombre" required/>
            </div> 
            <div className="form">            
                <input type="text" name="mascota" placeholder="Añada su nombre" required/>
            </div> 
            <div>
                <input type="buttonLogin" type="submit" value="Añadir"/>
            </div>
        </form>
        
    )
}
export default AddPet