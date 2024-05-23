import React from "react";
import ReactDOM from "react-dom";



const Header = () => {
    return (
        <div className="header">
            <div className="logo-container">
                <img className="logo" src="https://png.pngtree.com/template/20191014/ourmid/pngtree-pin-food-delivery-map-location-delivery-logo-concept-image_318151.jpg" alt="company logo"/>
            </div>
            <div className="nav-items">
                <ul>
                    <li>Home</li>
                    <li>About Us</li>
                    <li>Contact Us</li>
                    <li className="cart-nav-item">
                        Cart
                        <div className="cart-container">    
                            <img className="cart" src="https://t3.ftcdn.net/jpg/03/14/85/06/360_F_314850659_2aQLerz30kWj78tqpaGSbzYD6sAUmuDf.jpg"/>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
    );
}

const Body = () => {

}


const Footer = () => {

}




const Layout = () => {
    return (
        <div className="layout">
            <Header/>
        </div>
    );
}


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Layout/>);