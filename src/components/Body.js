import { RestaurantCard } from "./RestaurantCard";
import { useState, useEffect } from "react";
import { ShimmerCard } from "./ShimmerCard";
import { RESLIST_URL } from "../utils/constants";
import { Link } from "react-router-dom";


export const Body = () => {

    const [restaurantList, setRestaurantList] = useState([]);
    const [filteredList,setFilteredList] = useState([]);
    const [searchText, setSearchText] = useState("");

    console.log("Body component is rendered");

    useEffect(()=> {
        console.log("Use effect is called");
        fetchData();
    }, []);

    const fetchData = async () => {
        const data = await fetch(RESLIST_URL);
        const json = await data.json();
        setRestaurantList(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
        setFilteredList(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
    };

    if(restaurantList.length===0) {
        let ShimmerCards = [];
        for (let index = 0; index < 50; index++) {
            ShimmerCards.push(index);
       }
        return (
            <div className="shimmer-container">
                {
                    ShimmerCards.map(
                        (index) => {
                            return <ShimmerCard key={index} d={index}/>
                        }
                    )
                }
            </div>
        );
    }


    return (
        <div className="body">
            <div className="search-container">
                <input type="text" placeholder="Search text to filter" value={searchText} onChange={
                    (e) => {
                        setSearchText(e.target.value);
                        const updatedResList = restaurantList.filter(
                            (res) => {
                                return res.info.name.toLowerCase().includes(e.target.value.toLowerCase());
                            }
                        );
                        setFilteredList(updatedResList);
                    }
                }/>
            </div>
            <div className="filter-btn">
                <button onClick={ () => {
                    const updatedResList = restaurantList.filter(
                        (res) => {
                            return res.info.avgRating>=4;
                        }
                    );
                    setFilteredList(updatedResList);
                }}>Filter above rating 4</button>
            </div>

            <div className="restaurant-container">
                {
                    filteredList.map((restaurant)=> {
                        const linkedUrl = "/restaurants/" + restaurant.info.id; 
                        return <Link key={restaurant.info.id} to={linkedUrl} className="link-class"><RestaurantCard resCard={restaurant}/></Link>
                    })
                
                }
            </div>
        </div>
        
    );

};