import { useNavigate } from "react-router-dom"
import LogOutButton from "../LogOutButton/LogOutButton"
import "./HeaderUser.scss"

const HeaderUser = () => {
    const navigate = useNavigate()
    const profileButoon = () => {navigate("/profile")}
    const appointmentButton = () => {navigate("/appointment")}    
    const petButton = () => {navigate("/pet")}
    
    return(
        <div className="headerUser">
            <input onClick={profileButoon} type="submit" value="Perfil"/>
            <input onClick={appointmentButton} type="submit" value="Pedir Cita"/>
            <input onClick={petButton} type="submit" value="Tu mascota"/>
            <LogOutButton />
        </div>
    )

}

export default HeaderUser