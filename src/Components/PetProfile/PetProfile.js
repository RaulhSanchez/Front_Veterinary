import { useEffect, useState } from "react"
import PetCard from "../PetCard/PetCard"


const PetProfile = () => {

    const[pets, setPets] = useState([])
    const handleChanges = async () =>{
        try {
            
            let res = await fetch("http://localhost:3000/pet/find")
            res = await res.json()
            setPets(res.data)
        } catch (error) {
            console.log("errrorrr")
        }
    }
    useEffect(()=>{
        handleChanges()
    },[])
    return(
        <>
            {pets.map((dataPets)=>{
                console.log(dataPets)
                return(<PetCard pet={dataPets.id}/>)
            })}
        </>
    )
}

export default PetProfile