import APIConsumer from "../../Services/apiConsumer"


const AddPet = () => {
    const handleChange = async(e) => {
        e.preventDefault()
        await APIConsumer.registerPet(JSON.stringify({"name":e.target.name.value,"pet":e.taget.animal.value}))
    }
    return(
        <form className="formPet" onSubmit={(e)=>handleChange(e)}>
            <div>
                <input type="text" name="name" placeholder="Añada el nombre de su mascota"required/>
            </div>
            <div>
                <input type="text" name="pet" placeholder="Añada qué animal es" required />
            </div>
            <div>
                <input type="buttonLogin" type="submit" value="Login"/>
            </div>
        </form>
        
    )
}
export default AddPet