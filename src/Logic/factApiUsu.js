// obtener un dato random 
const ENDPOINT_AUTH_FACT = 'https://graph.microsoft.com/v1.0/me/messages' 
export const getAuthApi = async ()=>{
        const res = await fetch(ENDPOINT_AUTH_FACT)
        const data = await  res.json()
        console.log(data)
        const {fact} = data
        return fact
        }
    