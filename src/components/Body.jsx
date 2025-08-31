import RestaurantCard from "./RestaurantCard.jsx";
import resList from "../utils/mockData";
import { useEffect, useState } from "react";


const Body = () => {
  const [listOfRestaurants, setListOfRestaurant] = useState(resList);
  return (
    <div className="body">
      <div className="filter">
        <button className="filter-btn" onClick={() => {
          const filteredList = listOfRestaurants.filter((res) => res.rating > 4);
          setListOfRestaurant(filteredList);
        }}>
          Top Rated Restaurants
        </button>
      </div>
      <div className="res-container">

        {listOfRestaurants.map((resturant) => (
          <RestaurantCard key={resturant.id} resData={resturant} />
        ))}
      </div>m 
    </div>
  );
};

export default Body;
 