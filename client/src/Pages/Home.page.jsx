import React from "react";
import HomeLayout from "../Layouts/Home.layout";
import { Link } from "react-router-dom";

const HomePage = () => {
  return (
    <>
      <div className="flex items-center w-screen justify-center mt-8">
        <div className="container mt-4 border w-1/3 overflow-hidden rounded-lg">
          <Link to="/delivery">
            <img
              src="https://b.zmtcdn.com/webFrontend/e5b8785c257af2a7f354f1addaf37e4e1647364814.jpeg?output-format=webp&fit=around|402:360&crop=402:360;*,*"
              alt="Card1Image"
              className="w-full h-40 object-cover "
            />
            <div className="mt-1 ml-5">
              <h2 className="text-xl text-gray-800 font-normal">
                Order Online
              </h2>
              <p className="text-gray-600 mt-1">
                Stay home and order to your doorstep
              </p>
            </div>
          </Link>
        </div>

        <div className="mt-4 ml-5 border w-1/3 overflow-hidden rounded-lg">
          <Link to="/dining">
            <img
              src="https://b.zmtcdn.com/webFrontend/d026b357feb0d63c997549f6398da8cc1647364915.jpeg?output-format=webp&fit=around|402:360&crop=402:360;*,*"
              alt="Card1Image"
              className="w-full h-40 object-cover "
            />
            <div className="mt-1 ml-5">
              <h2 className="text-xl text-gray-800 font-normal">Dining</h2>
              <p className="text-gray-600 mt-1">
                View the city's favourite dining venues
              </p>
            </div>
          </Link>
        </div>
      </div>
    </>
  );
};

export default HomeLayout(HomePage);
