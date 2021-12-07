import { Link } from "react-router-dom"
import { useNavigate } from "react-router-dom"


const PetCard = (props) => {
    const navigate = useNavigate()
    const petProfileButton = () => {navigate("/petProfile")}
    return(
        <div className="form-style-4">
            <ul>
                <li>
                    <span >{[props.name,props.mascota]}</span>
                </li>
            </ul>
            <button>
                Crear cita para {[props.name]}
            </button>
            <button>
                Anular cita para {[props.name]}
            </button>
            <button onClick={petProfileButton}type="submit">
                Perfil de {[props.name]}
            </button>
        </div>
    )
}

export default PetCard