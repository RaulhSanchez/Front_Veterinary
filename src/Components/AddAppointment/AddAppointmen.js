import APIConsumer from "../../Services/apiConsumer"


const AddAppointment = () => {
    const handleChange = async (e) => {
        await APIConsumer.createAppointment(JSON.stringify({"date":e.target.date.value}))
    }
    return(
        <form className="form" onSubmit={(e) => handleChange(e)}>
            <div className="form">
                <input type="text" name="date" placeholder="Añada la fecha de la cita" required />
            </div>
            <div className="form">
                <input type="submit" value="Añadir cita" className="btn" />
            </div>
        </form>
    )

}
export default AddAppointment