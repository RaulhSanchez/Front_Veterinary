import { Link } from "react-router-dom"


const DoctorCard = (props) => {

    return(
        <>
            <ul>
                <li>{props.name}</li>
            </ul>
        </>
    )

}
export default DoctorCard