import { useNavigate } from "react-router-dom"
import APIConsumer from "../../Services/apiConsumer"

import "./AddPet.scss"

const AddPet = () => {
    const navigate = useNavigate()
    const handleChange = async(e) => {
        e.preventDefault()
        let result=await APIConsumer.registerPet(JSON.stringify({"name":e.target.name.value,"mascota":e.target.mascota.value}))
        navigate("/pet")
    }
    return(
        <form className="form-style-4" onSubmit={(e) => handleChange(e)}>
            <div className="">            
                <input type="text" name="name" placeholder="Añada su nombre" required/>
            </div> 
            <div className="form">            
                <input type="text" name="mascota" placeholder="Que animal es" required/>
            </div> 
            <div>
                <input type="submit" value="Añadir"/>
            </div>
        </form>
        
    )
}
export default AddPet