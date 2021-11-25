import store from "../../Store/store"
import { useState, useEffect } from "react"

const LoginHeader = () => {
    const [logged,setLogged ] = useState(false)
    
    useEffect(()=>{            
        console.log(logged)

        // Cuando algo cambie en el store, comprobaremos que senemos un token para mostrar un mensaje aquí disinto
        // Ojo, tu store tiene que guardar el token, nada de states
        store.subscribe(()=>{
            console.log("El estado ha cambiado",store.getState().logged) // -> esto no , token!! 
            setLogged(store.getState().userLogged)

            console.log(logged, 'LOGGED STATUS')
        })
    },[])

    return (
        <div >
            <h1>Titulo</h1>
            {(logged != false && <span>Usuario logado!!!</span>)}
        </div>
    )
}


export default LoginHeader