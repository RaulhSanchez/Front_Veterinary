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
    return currentState
}

export default createStore(reducer, {}, devToolsEnhancer({ trace: true }))