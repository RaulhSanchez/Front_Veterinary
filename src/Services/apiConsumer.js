export const APIConsumer = {

    loginUser: async (data) => {
        try{
            //let token = localStorage.getItem('token')
            let result = await fetch('http://localhost:3000/user/login', {
                method: "POST",
                headers: {
                    'Content-Type': 'application/json',
                },
                body: data
            })
            result = await result.json() 
            console.log(result.hashDescoted)
            localStorage.setItem('token', result.hashDescoted)
            return result 
        } catch(data){
            console.log(data)
        }
    },
    
    registerUser: async (data) => {
        try{
            let result = await fetch('http://localhost:3000/user/register',{
            method: "POST",
            headers: {'Content-Type': 'application/json'},
            mode:"cors",
            body: data
        })
        } catch (data){
            console.log(data)
        }
    },

    registerPet:async (data) => {

        try{
            let result = await fetch('http://localhost:3000/pet/create',{
                method: "POST",
                headers: {
                    'Content-Type': 'application/json',
                    "token": localStorage.getItem("token")
                },
                mode:"cors",
                body: data
            })
            return result
        } catch (data){
            console.log(data)
        }
    },
    getPet:async (data) => {
        console.log(data)
        try {
            let result = await fetch("http://localhost:3000/pet/all",{
                method:"GET",
                headers:{
                    "Content-Type": "application/json"
                },
                mode:"cors"
            })
            return result
        } catch (data) {
            console.log(data)
        }
    },
    
    createAppointment:async (data) => {
        console.log(data)
        try {
            let result = await fetch("http://localhost:3000/appointments/appointment",{
                method: "POST",
                headers: {
                    'Content-Type': 'application/json',
                    "token": localStorage.getItem("token")
                },
                mode:"cors",  
                body: JSON.stringify(data)
            })
            return result
        } catch (data){
            console.log(data)
        }
    },
    
    searchDoctor:async (data) =>{
        try {
            console.log()

            let result = await fetch("http://localhost:3000/doctor/all",{
                method:"GET",
                headers:{
                    "Content-type": "application/json"
                },
                mode:"cors",
            })
            console.log(result)
            return result
        } catch (data) {
            console.log(data)
        }
    }

}


export default APIConsumer