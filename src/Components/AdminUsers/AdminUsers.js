import { useState, useEffect } from "react"
import APIConsumer from "../../Services/apiConsumer"
import UserCard from "../UserCard/UserCard"


const AdminUsers = () => {
    const [users, setUsers] = useState([])
    const handleChange = async () => {
        try {
            let res = await APIConsumer.getAllUsersByAdmin()
            console.log("entra")
            console.log(res)
            setUsers(res.Data)
        } catch (error) {
            console.log("no hay usuarios")
        }
    }
    useEffect(()=>{
        handleChange()
    },[])
    return(
        <div>
            {users?.map((userData)=>{
                return(<UserCard name={
                    userData.name
                }
                />)
            })}
        </div>
    )
}
export default AdminUsers