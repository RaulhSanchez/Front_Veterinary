import { Link } from "react-router-dom"


const PetCard = (props) => {
    return(
        <div>
            <ul>
                <li>
                    <Link to = {`/${props.name}`}>{`/${props.name}`}</Link>
                </li>
            </ul>
        </div>
    )
}

export default PetCard