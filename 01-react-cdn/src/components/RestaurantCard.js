import { CDN_URL } from "../utility/constants";

const RestaurantCard = (props) => {
  const { resData } = props;
  const { cloudinaryImageId, name, cuisines, avgRating, costForTwo, sla, id } =
    resData?.info;

  return (
    <div className="res-card m-2 p-4 w-[250px] h-[400px] bg-gray-100 rounded-lg border border-transparent transition-all duration-200 ease-linear hover:border-black">
        <img
          src={CDN_URL + cloudinaryImageId}
          alt="food-image"
          className="w-full h-[150px] object-cover rounded-lg"
        />
        <h3 className="font-bold py-2">{name}</h3>
        <p>{cuisines.join(", ")}</p>
        <p>{avgRating} ⭐</p>
        <p>{costForTwo}</p>
        <p>{sla?.deliveryTime} minutes</p>
      </div>
  );
};

export default RestaurantCard;
