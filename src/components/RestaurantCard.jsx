import { CDN_URL } from "../utils/constants";
const RestaurantCard = ({ resData }) => {
  // destructure directly (API always has info object)
  const { cloudinaryImageId, name, avgRating, cuisines, costForTwo, sla } =
    resData?.info;

  return (
    <div className="res-card" style={{ backgroundColor: "#f0f0f0" }}>
      <img
        className="res-logo"
        alt="res-logo"
        src={CDN_URL + cloudinaryImageId}
      />
      <h3>{name}</h3>
      <h4>{cuisines.join(", ")}</h4>
      <h4>⭐ {avgRating}</h4>
      <h4>{costForTwo}</h4>
      <h4>{sla?.deliveryTime} mins</h4>
    </div>
  );
};

// high oorder componet

const withPromotedLabel = (RestaurantCard) => {
  return (
        
    (props) => {
      return (
        <div>
          <label className="absolute bg-black text-white" >Promoted</label>
          <RestaurantCard {...props} />
        </div>
      )
    }
  )
}


export default RestaurantCard;
