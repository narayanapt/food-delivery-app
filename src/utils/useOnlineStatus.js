
import { useState, useEffect } from "react";

export const useOnlineStatus = ()=> {

    [onlineStatus, setOnlineStatus] = useState("Online");
    [color, setColor] = useState("green");

    useEffect(()=> {

        window.addEventListener("online",()=> {
            setOnlineStatus("Online");
            setColor("green");
        });
        window.addEventListener("offline",()=> {
            setOnlineStatus("Offline");
            setColor("red");
        });
    },[]);


    return [color, onlineStatus];
}


