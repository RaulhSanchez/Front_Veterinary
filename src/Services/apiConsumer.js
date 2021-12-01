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
        } catch (data){
            console.log(data)
        }
    },
    addPet:async (data) => {
        try {
            let result = await fetch("http://localhost:3000/pet/",{
                method:"GET",
                headers:{
                    "Content-Type": "application/json",
                    "token": localStorage.getItem("token")
                },
                mode:"cors",
                body:data
            })
        } catch (data) {
            console.log(data)
        }
    },
    
    createAppointment:async (data) => {
        try {
            let result = await fetch("http://localhost:3000/appointment/appointment",{
                method:"POST",
                headers: {
                    "Content-type": "application/json",
                    "token": localStorage.getItem("token")
                },
                mode:"cors",
                body:data
            })
        } catch (data) {
            console.log(data)
        }
    }
    
}


export default APIConsumer