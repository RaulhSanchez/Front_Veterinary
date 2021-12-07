import { useEffect, useState } from "react"
import APIConsumer from "../../Services/apiConsumer"
import PetCard from "../PetCard/PetCard"


const PetProfile =  () => {    
    const [pet, setPet]= useState([])
    const handleChange = async() => {
        try {
            const user =localStorage.getItem("token")
            console.log(user)
            let res = await APIConsumer.getPet()
            res = await res.json()
            console.log(res)
            setPet(res.data)
        } catch (error) {
            console.log("no hay animales")
        }
    }
    useEffect(()=>{
        handleChange()
    },[])

    return(
        <>
            <div>
                {pet.map((dataPet)=>{
                    return(<PetCard name={
                        dataPet.name}
                        mascota={
                            dataPet.mascota}
                    />)
                })}
            </div>
        </>
    )
}
export default PetProfile