import APIConsumer from "../../Services/apiConsumer"

const AddAppointment = () => {
    const handleChange = async (e) => {
        e.preventDefault()        
        let res = await APIConsumer.createAppointment({"date":e.target.date.value})
    }
    return(
        <form className="form-style-4" onSubmit={(e) => handleChange(e)}>
            <div className="">
                <input type="date" name="date" placeholder="Añada la fecha de la cita" required />
            </div>
            <div className="form">
                <input type="submit" value="Añadir cita" className="btn" />
            </div>
        </form>
    )

}


export default AddAppointment