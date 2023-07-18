import React from "react";
import NavBar from "../Components/NavBar/NavBar.components";

const RestaurantLayout =
  (Component) =>
  ({ props }) => {
    return (
      <div>
        <NavBar />
        <Component {...props} />
      </div>
    );
  };

export default RestaurantLayout;
