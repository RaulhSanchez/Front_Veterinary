import AddDoctor from "../../Components/AddDoctor/AddDoctor"
import AddPet from "../../Components/AddPet/AddPet"
import HeaderUser from "../../Components/HeaderUser/HeaderUser"
import PetProfile from "../../Components/PetProfile/PetProfile"


const Pet = () => {
    return(
        <>
        <HeaderUser />
        <AddPet />
        
        <PetProfile />
        </>
    )
}
export default Pet