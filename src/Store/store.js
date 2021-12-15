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

const reducerButton = (currentState = initState,action)=>{
    if(action.type === "CLICK"){
        return{
            clicked: action.payload
        }
    }
}

export default createStore(reducer, {}, devToolsEnhancer({ trace: true }))