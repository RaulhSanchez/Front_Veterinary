import { useEffect, useState } from "react"
import APIConsumer from "../../Services/apiConsumer"
import DoctorCard from "../DoctorCard/DoctorCard"


const AddDoctor = () => {
    const [ doctor, setDoctor] = useState([])
    console.log(doctor)
    const handleChange = async () => {
        try {
            console.log("entra")
            const user =localStorage.getItem("token")
            console.log(user)
            let res = await APIConsumer.searchDoctor()
            res = await res.json()
            console.log(res)
            setDoctor(res.data)
        } catch (error) {
            console.log("no hay doctor")
        }
        
    }
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

export default AddDoctor