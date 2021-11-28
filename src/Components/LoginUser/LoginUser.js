import APIConsumer from "../../Services/apiConsumer"
import { useNavigate } from "react-router-dom"
import store from "../../Store/store"
import ("./LoginUser.scss")


const LoginUser = () => {
    const navigate = useNavigate()
    const handleChanges = async (e) => {
        e.preventDefault()
        let result = await APIConsumer.loginUser(JSON.stringify({mail: e.target.email.value, password: e.target.password.value}))
        console.log(result)
        navigate("/profile")
        store.dispatch({
            type:"LOGIN",
            payload:result.user.token,
            userLogged:true
        })
    }
    return (
        <div>
        <form className='buttonLogin' onSubmit={(e)=>handleChanges(e)}>
            <div className='buttonLogin'>
                <input className="buttonLogin" type='email' name='email' placeholder='Email' required />
            </div>
            <div className='login-form'>
                <input className="buttonLogin" type='password' name='password' placeholder='Contraseña' required />
            </div>    
            <input className="buttonLogin" type='submit' value='Login' className='btn btn-block' />
        </form>
        </div>
    )
}

export default LoginUser
