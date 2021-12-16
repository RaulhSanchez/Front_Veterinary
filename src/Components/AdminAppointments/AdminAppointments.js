import { useEffect, useState } from "react"
import APIConsumer from "../../Services/apiConsumer"
import AppointmentCard from "../AppointmentCard/AppointmentCard"

const AdminAppointments = () => {
    const [appointment, setAppointment] = useState([])
    const handleChange = async () => {
        try {
            let res = await APIConsumer.getAllApointmentByAdmin()
            setAppointment(res.Data)
        } catch (error) {
            console.log("no hay citas")
        }
    }
    useEffect(()=>{
        handleChange()
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
                petId={
                    dataAppointment.petId
                }
                />)
            })}
        </>
    )
}

export default AdminAppointments