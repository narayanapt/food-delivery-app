import { RestaurantCard } from "./RestaurantCard";
import {useState, useEffect} from "react";


export const Body = () => {

    const [restaurantList, setRestaurantList] = useState();

    useEffect(()=> {
        fetchData();
    }, []);

    const fetchData = async () => {
        const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=16.5061743&lng=80.6480153");
        const json = await data.json();
        setRestaurantList(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
    };

    return (
        <div className="body">
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