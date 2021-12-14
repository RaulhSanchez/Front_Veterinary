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
            localStorage.setItem('token', result.hashDescoted)
            return result 
        } catch(data){
            console.log(data)
        }
    },
    logOut: async(data) => {
        try {
            let result = await fetch("http://localhost:3001/user/logout",{
                method:"POST",
                headers:{
                    'Content-Type': 'application/json',
                    "token":localStorage.getItem("token")
                },
                body: data
            })
            result = await result.json() 
            return result
        } catch (error) {
            
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
                    "Content-Type": "application/json",
                    "token": localStorage.getItem("token")
                },
                mode:"cors"
            })
            result = await result.json() 
            return result
        } catch (data) {
            console.log(data)
        }
    },
    getPetByUser:async () => {
        try {
            let result = await fetch("http://localhost:3001/pet/user",{
                method:"GET",
                headers:{
                    "Content-Type": "application/json",
                    "token": localStorage.getItem("token")
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
            return result
        } catch (data){
            console.log(data)
        }
    },
    getAllApointment:async (data) => {        
        try {
            let result = await fetch("http://localhost:3001/appointments/user",{
                method: "GET",
                headers:{
                    'Content-Type': 'application/json',
                    "token": localStorage.getItem("token")
                },
                mode:"cors",
                body:data
            })
            result = await result.json() 
            return result
        } catch (error) {
            
        }
    },
    deleteAppointment:async (data) => {
        console.log(data)
        console.log(typeof(data))
        try {
            let result = await fetch("http://localhost:3001/appointments/delete",{
                method: "DELETE",
                headers:{
                    'Content-Type': 'application/json',
                    "token": localStorage.getItem("token")
                },
                mode:"cors",
                body:JSON.stringify(data)
            })
            

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
    },

}



export default APIConsumer
