export const APIConsumer = {

    loginUser: async (data) => {
        try{
            let result = await fetch('', {
                method: "POST",
                headers: {'Content-Type': 'application/json'},
                body: data
            })
            result = await result.json()
            localStorage.setItem('token', result.data)  
        } catch(data){
            console.log(data)
        }
    }
}

export default APIConsumer