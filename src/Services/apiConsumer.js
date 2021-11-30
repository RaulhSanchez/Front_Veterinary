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
            localStorage.setItem('token', result.hashDescoted.token)
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
            headers: {'Authorization': 'token'},
            mode:"cors",
            body: data
        })
        } catch (data){
            console.log(data)
        }
    },

    createAppointment:async (data) => {
        try {
            let result = await fetch("",{
                method:"POST",
                headers: {"Content-type": "application/json"},
                mode:"cors",
                body:data
            })
        } catch (data) {
            console.log(data)
        }
    }
    
}


export default APIConsumer