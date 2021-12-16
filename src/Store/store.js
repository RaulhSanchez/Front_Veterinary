import {createStore} from "redux"
import { devToolsEnhancer } from 'redux-devtools-extension';

const initalState = {
    userLogged: false
}

const reducer = (currentState = initalState, action) => {
    
    
    if(action.type === "LOGIN"){
        return{
            userLogged: action.payload
        }
    }
    if(action.type ==="LOGOUT"){
        return{
            userLogged:false
        }
    }
    return currentState
}

const initState = {
    clicked: false
}


export default createStore(reducer, {}, devToolsEnhancer({ trace: true }))