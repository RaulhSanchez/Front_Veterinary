import { Link } from "react-router-dom"


const DoctorCard = (props) => {

    return(
        <div className="form-style-4">
            <ul>
                <li>
                    <span>{props.name}</span>
                </li>
            </ul>
        </div>
    )

}
export default DoctorCard