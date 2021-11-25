import { useNavigate } from "react-router-dom"
import "./Header.scss"

const Header = () => {
    const navigate = useNavigate()
    const loginButton = () => {navigate("/login")}
    const registerButton = () => {navigate("/register")}
    const homeButton = () => {navigate("/home")}
    
    return(
        <div className="header">
            <h1>Nombre de la clinica</h1>
            <input onClick={loginButton} type="submit" value="login"/>
            <input onClick={registerButton} type="submit" value="register"/>
            <input onClick={homeButton} type="submit" value="home"/>
        </div>
    )
}

export default Header