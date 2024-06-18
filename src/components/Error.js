import { useRouteError } from "react-router-dom";

const Error = () => {
    
    const errorMessage = useRouteError();
    console.log(errorMessage);
    return (
        <div>
            <h1>This is an error page</h1>
            <h2>Status: {errorMessage.status}</h2>
            <h2>Status Text: {errorMessage.statusText} </h2>
        </div>
    ); 
};

export default Error;