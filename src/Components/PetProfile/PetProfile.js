import { useEffect, useState } from "react"
import APIConsumer from "../../Services/apiConsumer"
import PetCard from "../PetCard/PetCard"


const PetProfile =  () => {    
    const [pet, setPet]= useState([])
    const handleChange = async(e) => {        
        try {
            let res = await APIConsumer.getPetByUser()
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
                {pet?.map((dataPet)=>{
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