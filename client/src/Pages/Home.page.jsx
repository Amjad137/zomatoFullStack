import React from "react";
import HomeLayout from "../Layouts/Home.layout";
import { Link } from "react-router-dom";

const HomePage = () => {
  const delivery = "delivery";
  return (
    <>
      <div className="mt-4 ml-5 border w-40 h-40">
        <Link to={`/${delivery}`}>
          <img src="" alt="Card1 Image" />
          <div className="">
            <h2>Order Online</h2>
            <p>Stay home and order to your doorstep</p>
          </div>
        </Link>
      </div>
    </>
  );
};

export default HomeLayout(HomePage);
