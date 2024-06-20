import { useState, useEffect } from "react";
import { MENU_URL_PREFIX, MENU_URL_SUFFIX } from "./constants";
import { json } from "react-router-dom";

export const useRestaurantMenu = (resId) => {

    const [itemList,setItemList] = useState([]);
    const [restInfo,setRestInfo] = useState({});

    useEffect(() => {
        fetchRestaurantMenuData();
    },[]);

    const fetchRestaurantMenuData = async () => {
        const url = MENU_URL_PREFIX + resId + MENU_URL_SUFFIX;
        const data = await fetch(url);
        const jsonData = await data.json();
        setRestInfo(jsonData?.data?.cards[2]?.card?.card?.info);
        setItemList(jsonData?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card?.itemCards);
    }

    
    return [itemList,restInfo];
}