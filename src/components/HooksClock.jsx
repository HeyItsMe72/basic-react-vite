import React, {useEffect, useState} from "react";

function Clock({hour}) {
    return(
        <h3>{hour}</h3>
    )
}

export default function HooksClock(){
    const [hour, setHour] = useState(new Date().toLocaleTimeString());
    const [visible, setVisible] = useState(false); 

    // This hook will be ejecuted only if visible state changes
    useEffect(()=>{
        let timer;

        if(visible){
            timer = setInterval(() => {
                setHour(new Date().toLocaleTimeString())
            }, 1000);
        } else {
            clearInterval(timer);
        }

    }, [visible])



    return(
        <>
        <h2>Hooks Clock</h2>
        {visible && <Clock hour={hour}/>}
        <button onClick={()=>setVisible(true)}>Init</button>
        <button onClick={()=>setVisible(false)}>Stop</button>

        </>
    )
}