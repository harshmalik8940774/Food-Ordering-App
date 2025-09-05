import RestaurantCard,{witPromotedLabel} from "./RestaurantCard.jsx";
import { useEffect, useState } from "react";
import Shimmer from "./Shimmer.jsx";
import { Link } from "react-router-dom";
import userOnlineStatus from "../utils/useOnlineStatus.jsx";

const Body = () => {
  const [listOfRestaurants, setListOfRestaurants] = useState([]);

   const [filteredRestaurants, setFilteredRestaurants] = useState([]);
  const [searchText, setSearchText] = useState("");

  const RestaurantCardPromoted = witPromotedLabel(RestaurantCard);

  // live api call
  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(
      "https://instafood.onrender.com/api/restaurants?lat=12.9352&lng=77.6245"
    );
    const json = await data.json();

    const restaurants =
      json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants ;

    setListOfRestaurants(restaurants);
    setFilteredRestaurants(restaurants);

  };

  const onlineStatus = userOnlineStatus();

  if (onlineStatus == false) {
    return (
      <h1>
        Looks like you're offline!! Please check your internet connection
      </h1>
    )
  }



  // conditional rendering with shimmer
 

  return listOfRestaurants.length == 0 ? (
    <Shimmer />
  ) : (
    <div className="body">
      <div className="filter">
        <div className="search">
          <input
            type="text"
            className="search-box"
            value={searchText} // binding input with local state variable
            onChange={(e) => setSearchText(e.target.value)}
          />
          <button
            onClick={() => {
              // filter the Restaurant and Update the UI
              const filteredRestaurants = listOfRestaurants.filter((res) =>
                res?.info?.name
                  ?.toLowerCase()
                  .includes(searchText.toLowerCase())
              );
              setFilteredRestaurants(filteredRestaurants);
            }}
          >
            Search
          </button>
        </div>

        <button
          className="filter-btn"
          onClick={() => {
            const filteredList = listOfRestaurants.filter(
              (res) => res?.info?.avgRating > 4
            );
            setFilteredRestaurants(filteredList);
          }}
        >
          Top Rated Restaurants
        </button>
      </div>

      <div className="res-container">
        {filteredRestaurants.map((restaurant) => (
          <Link
            key={restaurant.data.id}
            to={"/restaurants/" + restaurant.data.id}
          >
            {/* <RestaurantCard resData={restaurant} /> */}
            {restaurant.data.promotes ? (
              <RestaurantCardPromoted resData={restaurant} />
            ) : (
              <RestaurantCard resData={restaurant} />
            )}
          </Link>
        ))}
      </div>
      {/* <div className="res-container">
        {filteredRestaurants.map((restaurant) => {
          const resId = restaurant?.info?.id; // safe optional chaining
          if (!resId) return null; // skip if id is missing

          return (
            <Link key={resId} to={`/restaurants/${resId}`}>
              <RestaurantCard resData={restaurant} />
            </Link>
          );
        })}
      </div> */}
    </div>
  );
};

export default Body;


