import { useEffect, useState } from "react"
import APIConsumer from "../../Services/apiConsumer"
import PetCard from "../PetCard/PetCard"


const PetProfile =  () => {    
    const [pet, setPet]= useState([])
    const handleChange = async() => {
        try {
            console.log("entra")
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
            {pet.map((dataPet)=>{
                return(<PetCard name={
                    dataPet.name}
                    mascota={
                        dataPet.mascota}
                />)
            })}
        </>
    )
}
export default PetProfile