import { useEffect, useState } from "react"

const useOnlineStatus = () =>{
    const [onlineStatus, setOnlineStatus] = useState(true)

    // used empty [] to call useEffect only once to add event-listener once
    useEffect(()=>{
        window.addEventListener("offline", ()=>{
            setOnlineStatus(false)
        })
        window.addEventListener("online", ()=>{
            setOnlineStatus(true)
        })
        
    },[])

    return onlineStatus
}

export default useOnlineStatus