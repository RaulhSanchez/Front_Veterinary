
import { useNavigate } from "react-router-dom"

const PetCard = (props) => {
    const navigate = useNavigate()
    const appointmentButton = () => {navigate("/appointment")}
    const petProfileButton = () => {navigate("/petProfile")}
    return(
        <div className="form-style-4">
            <ul>
                <li>
                    <span >{props.name}</span>
                </li>
                <li>
                    <span >{props.mascota}</span>
                </li>
            </ul>
            <button onClick={appointmentButton}> 
                Crear cita para {[props.name]}
            </button>
            <button onClick={petProfileButton}type="submit">
                Perfil de {[props.name]}
            </button>
        </div>
    )
}

export default PetCard