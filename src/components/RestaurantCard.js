import { CDN_URL } from "../utils/constants";


export const RestaurantCard = (prop) => {
    const {resCard} = prop;
    let cuisineString  = resCard.info.cuisines.join(", ");
    const srcfile = CDN_URL + resCard.info.cloudinaryImageId;
        
    return (
        <div className="restaurant-card-container">
            <img className="restaurant-image" src={srcfile} alt="restaurant-image"/>
            <h3>{resCard.info.name}</h3>
            <h4 className="cuisine">{cuisineString}</h4>
            <h4 className="star-rating">{resCard.info.avgRating} stars</h4>
        </div>
        
    );
};