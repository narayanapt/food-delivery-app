import { Link } from "react-router-dom";
import { LOGO_URL } from "../utils/constants"; 
import { CART_URL } from "../utils/constants";
import { useState } from "react";
import { OnlineStatus } from "./OnlineStatus";

export const Header = () => {

    const [btnStatus, setBtnStatus] = useState("login");


    return (
        <div className="header">
            <div className="logo-container">
                <img className="logo" src={LOGO_URL} alt="company logo"/>
            </div>
            <div className="nav-items">
                <ul>
                    <OnlineStatus />
                    <li><Link className="link-class" to="/">Home</Link></li>
                    <li><Link className="link-class" to="/about">About Us</Link></li>
                    <li><Link className="link-class" to="/contact">Contact Us</Link></li>
                    <li><Link className="link-class" to="/grocery">Grocery</Link></li>
                    <li className="cart-nav-item">
                        Cart
                        <div className="cart-container">    
                            <img className="cart" src={CART_URL}/>
                        </div>
                    </li>
                    <li><button onClick={()=>{
                        (btnStatus==="login")?setBtnStatus("logout"):setBtnStatus("login");
                    }}>{btnStatus}</button></li>
                </ul>
                
            </div>
        </div>
    );
};