import { useEffect, useState } from "react"
import APIConsumer from "../../Services/apiConsumer"
import DoctorCard from "../DoctorCard/DoctorCard"

const AdminDoctors = () => {
    const [doctor, setDoctor] = useState([])
    console.log(doctor)
    const handleChange = async () =>{
        try {
            console.log("entra")
            let res = await APIConsumer.getAllDoctorsByAdmin()
            setDoctor(res.data)
        } catch (error) {
            console.log("no hay doctores")
        }
    }
    console.log(doctor)
    useEffect(()=>{
        handleChange()
    },[])
    return(
        <>
        <ul>
            <li>{doctor.map((doctorList)=>{
                return(<DoctorCard name={
                    doctorList.name}
                    />)
                })}
            </li>
        </ul>
    </>
)
    
}
export default AdminDoctors