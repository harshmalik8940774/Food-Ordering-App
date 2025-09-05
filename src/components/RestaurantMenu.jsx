
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";

import useRestaurantMenu from "../utils/useRestaurantMenu";




const RestaurantMenu = () => {
  

  const { resId } = useParams();

  //custome hook
  const resInfo = useRestaurantMenu();//this hook function give data from api and also maintain the state of component

 
  if (resInfo == null) { <Shimmer /> };
  //destructuring the data
  
  const { name, cuisines, costForTwoMessage } = resInfo?.cards[0]?.cards?.cards?.info;

  const { itemCards } = resInfo?.cards[2]?.groupCards?.cardGroupMap?.REGULAR?.cards[1].card?.card;

  const categories =
    resInfo?.cards[2]?.groupCards?.cardGroupMap?.REGULAR?.cards[1].card?.card.filter(c => c.card?.card?.["@type"] == "this card having types");


  return (
    <div className="menu">
      <h1>{name}</h1>
      <p>
        {cuisines.join(", ")} - {costForTwoMessage}
      </p>

      <h2>Menu</h2>
      <ul>
        {itemCards.map((item) => (
          <li key={item.card?.info?.id}>
            {item.card?.info?.name} - Rs.{" "}
            {item.card?.info?.price || item.card?.defaultPrice / 100}
          </li>

        ))}
      </ul>
      <p>
       { categories.map((cat)=>{
                
                 <ResCategory catData = {cat}/>
        })}
      </p>
    </div>
  );

}

export default RestaurantMenu;

