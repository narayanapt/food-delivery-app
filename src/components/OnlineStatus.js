import { useOnlineStatus } from "../utils/useOnlineStatus";

export const OnlineStatus = () => {

    [color, onlineStatus] = useOnlineStatus();

    const box = {backgroundColor: color};

    return (
        <li style={box} className="online-status">
            Status: {onlineStatus}
        </li>
    );
};

