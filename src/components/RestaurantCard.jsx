import { CDN_URL } from "../utils/constants";
import resList from "../utils/mockData";

const RestaurantCard = (props) => {
  const { resData } = props; // ✅ destructure props inside

  return (
    <div className="res-card" style={{ backgroundColor: "#f0f0f0" }}>
      <img
        className="res-logo"
        alt="res-logo"
        src={CDN_URL} // ✅ append image id
      />
      <h3>{resData.resName}</h3>
      <h4>{resData.cuisine}</h4>
      <h4>{ resData.rating}</h4>
      <h4>38 minutes</h4>
    </div>
  );
};

export default RestaurantCard;
