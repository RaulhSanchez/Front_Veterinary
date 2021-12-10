import { useEffect,useState } from "react"
import APIConsumer from "../../Services/apiConsumer"



const AddAppointment = () => {
    const [ doctor, setDoctor] = useState([])
    const [ pet, setPet] = useState([])

    const handleChange = async (e) => {
        e.preventDefault()
        console.log(e.target[1].value)
        console.log(e.target[2].value)
        try {
            console.log("entra")
            let res = await APIConsumer.createAppointment({"date":e.target.date.value,"doctor":e.target[1].value,"pets":e.target[2].value})
        } catch (error) {
            console.log("error")
        }      
    }
        const getAllDoctors = async() =>{
            let res = await APIConsumer.searchDoctor()
            setDoctor(res.data)
        }
        const getPet = async() =>{
            let res = await APIConsumer.getPetByUser()
            setPet(res.data)
        }
        useEffect(()=>{
            getAllDoctors() 
            getPet()
        },[])
        
    return(
        <form className="form-style-4" onSubmit={(e) => handleChange(e)}>
            <div className="">
                <input type="date" name="date" placeholder="Añada la fecha de la cita" required />
            </div>
            <select name="doctor">
                    {doctor.map((doctorList)=>{
                        return( <option key={doctorList.id} value={doctorList.id}>
                            {doctorList.name}
                            </option>)
                    })}
            </select>
            <select name="pets">
                {pet.map((petList)=>{
                    return( <option key={petList.id} value={petList.id}>
                        {petList.name}
                        </option>)
                })}
        </select>
            <div className="form">
                <input type="submit" value="Añadir cita" className="btn" />
            </div>
        </form>
    )

}


export default AddAppointment