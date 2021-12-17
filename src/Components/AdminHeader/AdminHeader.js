import { useNavigate } from "react-router-dom"
import LogOutButton from "../LogOutButton/LogOutButton"


const AdminHeader = () => {
    const navigate = useNavigate()
    const profileButoon = () => {navigate("/allusers")}
    const appointmentButton = () => {navigate("/allappointments")}    
    const petButton = () => {navigate("/allpets")}
    const doctorButton = () => {navigate("/alldoctors")}
    
    return(
        <div className="headerUser">
            <input onClick={profileButoon} type="submit" value="Todos los usuarios"/>
            <input onClick={appointmentButton} type="submit" value="Todas las citas"/>
            <input onClick={petButton} type="submit" value="Todas las mascotas"/>
            <input onClick={doctorButton} type="submit" value="Todos los doctores"/>
            <LogOutButton />
        </div>
    )

}

export default AdminHeader