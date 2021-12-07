import AddPet from "../../Components/AddPet/AddPet"
import GetAllAppointmen from "../../Components/GetAllAppointmen/GetAllAppointmen"
import HeaderUser from "../../Components/HeaderUser/HeaderUser"
import PetProfile from "../../Components/PetProfile/PetProfile"


const UserProfile = () => {
    return(
        <>
            <HeaderUser />
            <AddPet />
            <GetAllAppointmen />
            <PetProfile />
        </>
    )

}

export default UserProfile