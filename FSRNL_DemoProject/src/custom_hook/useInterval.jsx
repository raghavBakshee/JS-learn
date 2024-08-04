import { useEffect, useState } from "react";

const useInterval=()=>{
    const [second, setSecond] = useState(0);
    useEffect(()=>{
        const timerId = setInterval(()=> 
            setSecond(s=>s+1), 1000)
        return()=>{
            clearInterval(timerId);
        }
    })
    return second;
}

export default useInterval;