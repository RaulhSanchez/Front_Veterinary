import store from "../../Store/store"
import { useState, useEffect } from "react"

const LoginHeader = () => {
    const [states,setState ] = useState([])
    
        useEffect(()=>{
            setState(store.getState().stateTipe)
            store.subscribe(()=>{
                console.llog("El estado ha cambiado", store.getState().stateTipe)
                setState(store.getState().tasks)
            })
        },[])
    return (
        <div >
            <h1>Titulo</h1>
            <button >logIn</button>  
                {states.map((state)=>
                    <>                     
                        <button >{state.stateTipe}logOut</button>
                    </>    
                )}   
        </div>
    )
}

LoginHeader.defaultProps = {
    title: 'Logeate'
}

export default LoginHeader