// import RestaurantCard from "./RestaurantCard.jsx";
// import resList from "../utils/mockData";
// import { useEffect, useState } from "react";
// import Shimmer from "./Shimmer.jsx";


// const Body = () => {
//   const [listOfRestaurants, setListOfRestaurant] = useState();

//   const [searchText, setSearchText] = useState("");

//   //live api call
//   useEffect(() => {
//     fetchData();
//   }, [])
  
//   const fetchData = async () => {
//     const data = await fetch(
//       "`https://instafood.onrender.com/api/restaurants?lat=12.9352&lng=77.6245`"
//     );
//     const json = await data.json();
//     setListOfRestaurant(
//       json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants
//     );
//   };
//   // conditional rendiring
//   // if (listOfRestaurants.length == 0) {
//   //   return <Shimmer/>
//   // }
//   return listOfRestaurants.length == 0 ? <Shimmer/> : (
//     <div className="body">
//       <div className="filter">
//         <div className="search">
//           <input type="text" className="search-box" value={setSearchText} onChange={(e) => {
//             setSearchText(e.target.value);
//           }}></input>
//           <btn onClick={() => {
//             const filterRestaurant = listOfRestaurants.filter((res) => res.data.name.toLowerCase().includes(searchText.toLowerCase()))
//             setListOfRestaurant = filterRestaurant;
//           }}>button</btn>
//         </div>
//         <button className="filter-btn" onClick={() => {
//           const filteredList = listOfRestaurants.filter((res) => res.rating > 4);
//           setListOfRestaurant(filteredList);
//         }}>
//           Top Rated Restaurants
//         </button>
//       </div>
//       <div className="res-container">

//         {listOfRestaurants.map((resturant) => (
//           <RestaurantCard key={resturant.id} resData={resturant} />
//         ))}
//       </div>m
//     </div>
//   );
// };

// export default Body;
 

import RestaurantCard from "./RestaurantCard.jsx";
import { useEffect, useState } from "react";
import Shimmer from "./Shimmer.jsx";

const Body = () => {
  const [listOfRestaurants, setListOfRestaurant] = useState([]);
  const [searchText, setSearchText] = useState("");

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

    setListOfRestaurant(restaurants);
  };

  // conditional rendering with shimmer
  if (listOfRestaurants.length === 0) {
    return <Shimmer />;
  }

  return (
    <div className="body">
      <div className="filter">
        <div className="search">
          <input
            type="text"
            className="search-box"
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)}
          />
          <button
            onClick={() => {
              const filteredRestaurants = listOfRestaurants.filter((res) =>
                res?.info?.name
                  ?.toLowerCase()
                  .includes(searchText.toLowerCase())
              );
              setListOfRestaurant(filteredRestaurants);
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
            setListOfRestaurant(filteredList);
          }}
        >
          Top Rated Restaurants
        </button>
      </div>

      <div className="res-container">
        {listOfRestaurants.map((restaurant) => (
          <RestaurantCard key={restaurant?.info?.id} resData={restaurant} />
        ))}
      </div>
    </div>
  );
};

export default Body;
