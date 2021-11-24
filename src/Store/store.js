import {createStore} from "redux"

const initalState = {
    stateTipe:[]
}

const reducer = (currentState = initalState, action) => {
    console.log(currentState,"Antes de cambiar el store")
    if(action.type == "CHANGE_BUTTON"){
        return{
            ...currentState,
            button: currentState.button.concat(action.payload)
        }
    }
    return currentState
}

export default createStore(reducer)