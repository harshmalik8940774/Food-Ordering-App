import { useState } from "react";
import { LOGO_URL } from "../utils/constants";

const Header = () => {
  const [btnNameReact, setBtnReact] = useState("Login");
  return (
    <div className="header">
      <div>
        <img
          className="logo"
          src={LOGO_URL}
          alt="app-logo"
        />
      </div>
      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>About Us</li>
          <li>Contact Us</li>
          <li>Cart</li>
          <button className="login" onClick={() => {
            
            btnNameReact == "Login"
              ? setBtnReact("Logout")
              :setBtnReact("Login")
          }}>{ btnNameReact}</button>
        </ul>
      </div>
    </div>
  );
};

export default Header;
