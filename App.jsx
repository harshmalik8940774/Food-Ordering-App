import React from "react";
import ReactDOM from "react-dom/client";

const Header = () => {
  return (
    <div className="header">
      <div>
        <img
          className="logo"
          src="https://imgs.search.brave.com/xlkgkZ6oLt8AIeD_XEPj7QZQQyov6s1mw6ZyqWFE2vI/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9sb2dv
LmNvbS9pbWFnZS1jZG4vaW1hZ2VzL2t0c3kyOHBkL3Byb2R1Y3Rpb24vN2FiNWRlZjBhYjFkYWQyNmE5MGJjMzVjYjdlZWQ5ZTYyOGY3ZjIwMS00MzB4NDMwLnBuZz93PTEwODAmcT03MiZmbT13ZWJw"
          alt="app-logo"
        />
      </div>
      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>About Us</li>
          <li>Contact Us</li>
          <li>Cart</li>
        </ul>
      </div>
    </div>
  );
};

const resList = [
  { resName: "mxs", cuisine: "banana", id: 123 },
  { resName: "ab", cuisine: "mango", id: 374 },
  { resName: "abs", cuisine: "apple", id: 484 },
  { resName: "tbs", cuisine: "yal", id: 483 },
];

const RestaurantCard = (props) => {
  const { resData } = props; // ✅ destructure props inside

  return (
    <div className="res-card" style={{ backgroundColor: "#f0f0f0" }}>
      <img
        className="res-logo"
        alt="res-logo"
        src="https://imgs.search.brave.com/xlkgkZ6oLt8AIeD_XEPj7QZQQyov6s1mw6ZyqWFE2vI/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9sb2dv
LmNvbS9pbWFnZS1jZG4vaW1hZ2VzL2t0c3kyOHBkL3Byb2R1Y3Rpb24vN2FiNWRlZjBhYjFkYWQyNmE5MGJjMzVjYjdlZWQ5ZTYyOGY3ZjIwMS00MzB4NDMwLnBuZz93PTEwODAmcT03MiZmbT13ZWJw"
      />
      <h3>{resData.resName}</h3>
      <h4>{resData.cuisine}</h4>
      <h4>4.4 stars</h4>
      <h4>38 minutes</h4>
    </div>
  );
};

const Body = () => {
  return (
    <div className="body">
      <div className="search">Search</div>
      <div className="res-container">
        {resList.map((resturant) => (
          <RestaurantCard key={resturant.id} resData={resturant} />
        ))}
      </div>
    </div>
  );
};

const AppLayout = () => {
  return (
    <div className="app">
      <Header />
      <Body />
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout />);
