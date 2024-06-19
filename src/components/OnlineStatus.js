import { useState, useEffect } from "react";

export const OnlineStatus = () => {
    [onlineStatus, setOnlineStatus] = useState("online");

    useEffect(()=> {
        window.addEventListener("online",()=> {
            setOnlineStatus("online");
        });
        window.addEventListener("offline",()=> {
            setOnlineStatus("offline");
        });
    },[]);

    return (
        <li className="online-status">
            Status: {onlineStatus}
        </li>
    );
};