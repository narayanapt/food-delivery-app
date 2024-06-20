
import { useParams } from "react-router-dom";
import { ShimmerCard } from "./ShimmerCard";
import { ItemCard } from "./ItemCard";
import { useRestaurantMenu } from "../utils/useRestaurantMenu";


const RestaurantMenu = () => {

    const {resId} = useParams();

    const [itemList, restInfo] = useRestaurantMenu(resId);

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