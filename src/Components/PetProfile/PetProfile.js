import { useState } from "react"


const PetProfile = () => {
    const[pets, setPets] = useState([])
    const handleChanges = async () =>{
        try {
            let result = await fetch("http://localhost:3000/pet/find",{
                body:data
            })
        } catch (error) {
            console.log(data)
        }
    }
}

export default PetProfile