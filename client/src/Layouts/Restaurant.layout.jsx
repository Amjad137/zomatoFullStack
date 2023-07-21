import React from "react";
import NavBar from "../Components/NavBar/NavBar.components";

const RestaurantLayout =
  (Component) =>
  ({ props }) => {
    return (
      <div className="flex flex-col justify-center">
        <NavBar />
        <Component {...props} />
      </div>
    );
  };

export default RestaurantLayout;
