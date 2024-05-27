import { LOGO_URL } from "../utils/constants"; 
import { CART_URL } from "../utils/constants";

export const Header = () => {
    return (
        <div className="header">
            <div className="logo-container">
                <img className="logo" src={LOGO_URL} alt="company logo"/>
            </div>
            <div className="nav-items">
                <ul>
                    <li>Home</li>
                    <li>About Us</li>
                    <li>Contact Us</li>
                    <li className="cart-nav-item">
                        Cart
                        <div className="cart-container">    
                            <img className="cart" src={CART_URL}/>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
    );
};