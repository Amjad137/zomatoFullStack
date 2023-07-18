import React from "react";
import NavBar from "../Components/NavBar/NavBar.components";
import HomeNavBar from "../Components/NavBar/HomeNav.components";
import FoodTab from "../Components/FoodTab/FoodTab.components";
const HomeLayout =
  (Component) =>
  ({ ...props }) => {
    return (
      <div>
        <HomeNavBar />
        <Component {...props} />
      </div>
    );
  };

export default HomeLayout;
