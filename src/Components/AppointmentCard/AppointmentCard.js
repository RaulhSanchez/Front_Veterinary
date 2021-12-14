import { useEffect, useState } from "react"
import APIConsumer from "../../Services/apiConsumer"

const AppointmentCard = (props) => {
    const DeleteAppointmentButton = async (e) => {
        const [date,setDate] = useState([])
        try {
            
            let res = await APIConsumer.deleteAppointment({"date":props.date})
            res = await res.json()
            setDate(res.data)
        } catch (error) {console.log("Error al elminar la cita")}
    }
    useEffect(()=>{
        
    },[])
    return(
        <>
        <div className="form-style-4">
            <ul>
                <li>
                    <span >{props.date}</span>
                </li>
                <li>
                    <span >{props.state}</span>
                </li>
                <li>
                    <span >{props.userId}</span>
                </li>
                <li>
                    <span >{props.petId}</span>
                </li>
            </ul>       
            <div >
                <input onClick={()=>DeleteAppointmentButton(props.date)}type="submit"value="Eliminar cita" className="btn" />
            </div>
        </div>
        </>
    )
}

export default AppointmentCard