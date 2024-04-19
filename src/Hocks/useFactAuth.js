import { useEffect, useState } from "react"
import { getAuthApi } from "../Logic/factApiUsu"
export function useAuthData (){
    const [stateFact,setStateFact] = useState()
    const refreshFact = () => {
        getAuthApi().then(newFact => setStateFact(newFact))
    }
    useEffect(refreshFact,[])
    return {stateFact}
}
