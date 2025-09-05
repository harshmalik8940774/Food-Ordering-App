import { useEffect, useState } from "react";

const userOnlineStatus = () => {
   
  const [onlineStatus,setOnlineStatus] = useState(true);


  //check if online
  useEffect(() => {
       
    window.addEventListener("offline", () => {
      setOnlineStatus(offline);
    });

     window.addEventListener("online", () => {
       setOnlineStatus(online);
     });
    
  },[])

    
  return onlineStatus;

  
}

export default userOnlineStatus;