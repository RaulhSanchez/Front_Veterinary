import { useEffect, useState } from "react"
import APIConsumer from "../../Services/apiConsumer"
import AppointmentCard from "../AppointmentCard/AppointmentCard"


const GetAllAppointmen = () => {
    const [appointment, setAppointment] = useState([])
    const handleChange = async () => {
        try {
            const user =localStorage.getItem("token")
            let res = await APIConsumer.getAllApointment()
            res = await res.json()
            console.log(res)
            setAppointment(res.Data)
        } catch (error) {
            console.log("no hay citas")
        }
    }
    useEffect(()=>{
        handleChange()
        console.log(appointment)
    },[])
    return(
        <>
            {appointment.map((dataAppointment)=>{
                return(<AppointmentCard date={
                    dataAppointment.date
                }state={
                    dataAppointment.state
                }userId={
                    dataAppointment.userId
                }
                />)
            })}
        </>
    )
 
}

export default GetAllAppointmen