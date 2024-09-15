import { CDN_URL } from "../utility/constants";

const RestaurantCard = (props) => {
  const { resData } = props;
  const { cloudinaryImageId, name, cuisines, avgRating, costForTwo, sla } =
    resData.info;
  return (
    <div className="res-card">
      <img
        src={
           CDN_URL+
          cloudinaryImageId
        }
        alt="food-image"
        className="res-image"
      />
      <h3>{name}</h3>
      <p>{cuisines.join(", ")}</p>
      <p>{avgRating} ⭐</p>
      <p>{costForTwo}</p>
      <p>{sla?.deliveryTime} minutes</p>
    </div>
  );
};

export default RestaurantCard;
