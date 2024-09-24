import { useEffect, useState } from "react";
import { DATA_URL } from "./constants";

const useListOfRestaurants = (setFilteredRestaurant) => {
  const [listOfRestaurants, setListOfRestaurants] = useState([]);
  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(DATA_URL);
    const json = await data.json();
    const restaurants =
      json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants;
    setListOfRestaurants(restaurants);
    setFilteredRestaurant(restaurants);
  };

  return listOfRestaurants;
};

export default useListOfRestaurants;
