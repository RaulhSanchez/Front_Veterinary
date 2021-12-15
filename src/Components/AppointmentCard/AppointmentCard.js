import { useEffect, useState } from "react"
import { Navigate, useNavigate } from "react-router-dom"
import APIConsumer from "../../Services/apiConsumer"
import store from "../../Store/store"


const AppointmentCard = (props) => {
    const [date, setDate] = useState()
    const navigate = useNavigate()
    const DeleteAppointmentButton = async () => {
        try {            
            let res = await APIConsumer.deleteAppointment({"date":props.date})
            console.log(res)
            if(res){
                console.log("entra")
                store.dispatch({
                    type:"CLICK",
                    payload: res.data
                })
                navigate("/appointment")
            }
        } catch (error) {console.log("Error al elminar la cita")}
    }
 
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