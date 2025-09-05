import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header.jsx";
import Body from "./components/Body.jsx";
import Contact from "./components/Contact.jsx";
import About from "./components/About.jsx";
import { createBrowserRouter, RouterProvider,Outlet } from "react-router-dom";
import Error from "./Error.jsx";
import RestaurantMenu from "./components/RestaurantMenu.jsx";

const AppLayout = () => {
  return (
    <div className="app">
      <Header />
      {/* <Body /> */}
      <Outlet/> 

    </div>
  );
};

//routing configuration

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: [
      {
        path: "/",
        element: <Body />, //load this element on the given path(route)
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      // {
      //   path: "/retaurants/:resId",//this path is dynamic path to make dynamic routing(our routes is unique for a unique restaurant(having unique res id))
      //   element: <RestaurantMenu />,
      // },

      {
        path: "/restaurants/:resId",
        element: <RestaurantMenu />,
      },
    ],
    errorElement: <Error />,
  },
  // {
  //   path: "/",
  //   element: <Body />, //load this element on the given path(route)
  // },
  // {
  //   path: "/about",
  //   element: <About />,
  // },
  // {
  //   path: "/contact",
  //   element: <Contact />,
  // },
  // {
  //   path: "/retaurants/:resId",
  //   element: <RestaurantMenu />,
  // },
]);


const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(<AppLayout />);

root.render(<RouterProvider router={appRouter} />);
