import { useEffect, useState } from "react"
import { setUserData } from "../Logic/sendDataUser"

export function useSetDataUser ({form}){
    const [state, setState] = useState()

    const ApiSendData = () => {
        setUserData().then(response => setState(response))
        
    }
    useEffect(ApiSendData,[form])
    return state
}


