import { useState ,useContext, use} from "react";
import { LOGO_URL } from "../utils/constants";
// link component
import { Link } from "react-router-dom";
import userOnlineStatus from "../utils/useOnlineStatus"; 
import UserContext from "../utils/userContext";

const Header = () => {
  const [btnNameReact, setBtnReact] = useState("Login");

  const onlineStatus = userOnlineStatus();

  const { loggedInUser } = useContext(UserContext);

  
  return (
    <div className="header">
      <div>
        <img className="logo" src={LOGO_URL} alt="app-logo" />
      </div>
      <div className="nav-items">
        <ul>
          <li className="px-4">Online Status: {onlineStatus ? "✅" : "🔴"}</li>

          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About Us</Link>
          </li>
          <li>
            <Link to="/contact">Contact Us</Link>
          </li>
          <li>Cart</li>

          <button
            className="login"
            onClick={() => {
              btnNameReact == "Login"
                ? setBtnReact("Logout")
                : setBtnReact("Login");
            }}
          >
            {btnNameReact}
          </button>
          <li className="px-4 font-bold">loggedInUser</li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
