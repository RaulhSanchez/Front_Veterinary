const AppointmentCard = (props) => {
    return(
        <>
        <div>
            <ul>
                <li>
                    <span >{[props.date,props.state,props.userId]}</span>
                </li>
            </ul>
        </div>
        </>
    )
}

export default AppointmentCard