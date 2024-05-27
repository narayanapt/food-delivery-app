import { RestaurantCard } from "./RestaurantCard";
import { resObject } from "../utils/mockData"; 
import {useState} from "react";


export const Body = () => {

    const resList = resObject.data.restaurants;
    const [restaurantList, setRestaurantList] = useState(resList);
    return (
        <div className="body">
            <div>
                <h1> Syamala Devi</h1>
            </div>
            <div className="search-container">
                <input type="text" placeholder="Search text"/>
                <input type="submit" value="Search"/>
            </div>
            <div className="filter-btn">
                <button onClick={ () => {
                    const updatedResList = restaurantList.filter(
                        (res) => {
                            return res.info.avgRating>=4;
                        }
                    );
                    setRestaurantList(updatedResList);
                }}>Filter</button>
            </div>
            <div className="restaurant-container">
                {
                restaurantList.map((restaurant)=> {
                    return <RestaurantCard key={restaurant.info.id} resCard={restaurant}/>
                })
                
                }
            </div>

        </div>
        
    );

};