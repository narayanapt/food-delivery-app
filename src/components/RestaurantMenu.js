import { useEffect, useState } from "react";
import {MENU_URL_PREFIX,MENU_URL_SUFFIX} from "../utils/constants";
import { json, useParams } from "react-router-dom";
import { ShimmerCard } from "./ShimmerCard";
import { ItemCard } from "./ItemCard";

const RestaurantMenu = () => {

    const [itemList,setItemList] = useState([]);
    const [restInfo,setRestInfo] = useState({});
    const {resId} = useParams();

    useEffect(() => {
        fetchRestaurantMenuData();
    },[]);

    const fetchRestaurantMenuData = async () => {
        const url = MENU_URL_PREFIX + resId + MENU_URL_SUFFIX;
        const data = await fetch(url);
        const jsonData = await data.json();
        console.log(jsonData);
        setRestInfo(jsonData?.data?.cards[2]?.card?.card?.info);
        setItemList(jsonData?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card?.itemCards);
    }

    if(itemList.length===0) {
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
        <div className="menu-container">
            <h1>{restInfo.name}</h1>
            <h3>Cuisines - {restInfo.cuisines.join(", ")}</h3>
            <h3>Cost for two - {restInfo.costForTwo/100}</h3>
            <h2>Menu</h2>
            {
                itemList.map((item)=> {
                    return <ItemCard key={item.card.info.id} info={item.card.info}/>;
                })
            }
        </div>
    );
}

export default RestaurantMenu;