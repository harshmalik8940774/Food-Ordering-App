
import { useEffect, useState } from "react";
import { MENU_API } from "../utils/constants";

const useRestaurantMenu = (resId) => {
  
  const [resInfo, setResInfo] = useState(null);

  //fetch the data from live api
 useEffect(() => {
   fetchMenu();
 }, []);

 const fetchMenu = async () => {
   const resInfo = await fetch(MENU_API + resId);

   const json = await data.json();

   setResInfo(json.data);
 };
  

  return resInfo;
}


export default useRestaurantMenu;