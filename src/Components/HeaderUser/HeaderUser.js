import { useNavigate } from "react-router-dom"
import "./HeaderUser.scss"

const HeaderUser = () => {
    const navigate = useNavigate()
    const homeButton = () => {navigate("/home")}
    const profileButoon = () => {navigate("/profile")}
    const appointmentButton = () => {navigate("/appointment")}    
    const petButton = () => {navigate("/pet")}
    
    return(
        <div className="headerUser">
            <input onClick={homeButton} type="submit" value="Home"/>
            <input onClick={profileButoon} type="submit" value="Profile"/>
            <input onClick={appointmentButton} type="submit" value="Appointment"/>
            <input onClick={petButton} type="submit" value="Your Pet"/>
        </div>
    )

}

export default HeaderUser