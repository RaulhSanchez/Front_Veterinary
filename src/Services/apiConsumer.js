export const APIConsumer = {

    loginUser: async (data) => {
        try{
            let result = await fetch('http://localhost:3001/user/alta', {
                method: "POST",
                headers: {'Content-Type': 'application/json'},
                body: data
            })
            result = await result.json()
            return result 
        } catch(data){
            console.log(data)
        }
    },
    
    registerUser: async (data) => {
        try{
            let result = await fetch('http://localhost:3001/user/alta',{
            method: "POST",
            headers: {'Content-Type': 'application/json'},
            body: data
        })
        } catch (data){
            console.log(data)
        }
    },

    
}


export default APIConsumer