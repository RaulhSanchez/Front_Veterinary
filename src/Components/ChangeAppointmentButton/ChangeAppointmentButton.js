import { useEffect, useState } from "react/cjs/react.development"
import APIConsumer from "../../Services/apiConsumer"


const ChangeAppointmentButton = async () => {
    const [date, setDate]= useState()
    const handleChange = async (e) => {
        try {
            let result = await APIConsumer.changeAppointmen({"date":e.date})
            setDate(result.data)
        } catch (error) {
            console.log("no se ha hecho el cambio")
        }
    }
    useEffect(()=>{
        ChangeAppointmentButton()
    })
    return(
        <form className="form-style-4" onSubmit={(e)=>handleChange(e)}>
            <span>Cambiar fecha</span>
            <div className="">
                <input type="date" name="date" placeholder="Añada la fecha de la cita" required />
            </div>
            <div className="form">
                <input type="submit" value="Añadir cita" className="btn" />
            </div>
        </form>
    )
}

export default ChangeAppointmentButton