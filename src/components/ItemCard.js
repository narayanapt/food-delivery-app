export const ItemCard = ({info}) => {

    return (
        <div className="item-card">
            <h4>{info.name} - Rs. {info.price/100}</h4>
        </div>
    );
};