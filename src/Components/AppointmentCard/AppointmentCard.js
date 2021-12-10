const AppointmentCard = (props) => {
    return(
        <>
         <div className="form-style-4">
            <ul>
                <li>
                    <span >{props.date}</span>
                </li>
                <li>
                    <span >{props.state}</span>
                </li>
                <li>
                    <span >{props.userId}</span>
                </li>
                
            </ul>
        </div>
        </>
    )
}

export default AppointmentCard