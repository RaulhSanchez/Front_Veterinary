export const APIConsumer = {

    loginUser: async (data) => {
        try{
            //let token = localStorage.getItem('token')
            let result = await fetch('http://localhost:3001/user/login', {
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
            let result = await fetch('http://localhost:3001/user/register',{
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
            let result = await fetch('http://localhost:3001/pet/create',{
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
    getPet:async () => {
        try {
            let result = await fetch("http://localhost:3001/pet/all",{
                method:"GET",
                headers:{
                    "Content-Type": "application/json"
                },
                mode:"cors"
            })
            result = await result.json() 
            return result
        } catch (data) {
            console.log(data)
        }
    },
    
    createAppointment:async (data) => {
        console.log(data)
        try {
            let result = await fetch("http://localhost:3001/appointments/appointment",{
                method: "POST",
                headers: {
                    'Content-Type': 'application/json',
                    "token": localStorage.getItem("token")
                },
                mode:"cors",  
                body: JSON.stringify(data)
            })
            console.log(result)
            return result
        } catch (data){
            console.log(data)
        }
    },
    
    getAllApointment:async (data) => {
        try {
            let result = await fetch("http://localhost:3001/appointments/all",{
                method: "GET",
                headers:{
                    'Content-Type': 'application/json'
                },
                mode:"cors",
            })
            console.log(result)
            return result
        } catch (error) {
            
        }
    },

    searchDoctor:async () =>{
        try {
            let result = await fetch("http://localhost:3001/doctor/all",{
                method:"GET",
                headers:{
                    "Content-type": "application/json"
                },
                mode:"cors",
            })
            result = await result.json() 
            return result
        } catch (data) {
            console.log(data)
        }
    }

}


export default APIConsumer