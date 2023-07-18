import React, { useState } from "react";
import { BiUser } from "react-icons/bi";
import { MdLocationPin } from "react-icons/md";
import { Link } from "react-router-dom";
import { BsSearch } from "react-icons/bs";
import Popup from "../PopUps/Popup.components";

function NavSm() {
  return (
    <>
      <div className="items-center justify-between flex w-full md:hidden">
        <div className="w-28">
          <img
            src="https://b.zmtcdn.com/web_assets/b40b97e677bc7b2ca77c58c61db266fe1603954218.png"
            alt="logo"
            className="w-full h-full"
          />
        </div>
        <div className="flex items-center gap-3">
          <button className="bg-zomato-400 text-white py-2 px-3 rounded-full">
            Use App
          </button>
          <span className="border items-center justify-center pt-1  rounded-full p-1">
            <BiUser />
          </span>
        </div>
      </div>
    </>
  );
}

function NavLg() {
  const [openSignin, setOpenSignin] = useState(false);
  const [openSignup, setOpenSignup] = useState(false);

  const openSigninDialog = () => {
    setOpenSignin(true);
  };
  const openSignupDialog = () => {
    setOpenSignup(true);
  };
  return (
    <>
      <Popup isOpen={openSignin} setIsOpen={setOpenSignin} pageName="SignIn" />
      <Popup isOpen={openSignup} setIsOpen={setOpenSignup} pageName="SignUp" />
      <div
        className="relative hidden w-full lg:block overflow-x-hidden"
        style={{ height: "28rem" }}
      >
        <img
          src="https://b.zmtcdn.com/web_assets/81f3ff974d82520780078ba1cfbd453a1583259680.png"
          alt="Backdrop Poster"
          className="w-full h-full object-cover object-center"
        />

        <div className="absolute container flex flex-col justify-between items-center p-3 text-white left-24 top-5 text-xl font-light">
          <div className="container flex justify-between">
            <Link to="#">Get the App</Link>
            <div className="flex gap-10">
              <Link to="#">Investor Relations</Link>
              <Link to="/restaurants">Add Restaurants</Link>

              <button onClick={openSigninDialog}>Login</button>

              <button onClick={openSignupDialog}>Sign Up</button>

              <Link
                to="#"
                className="border items-center justify-center pt-1  rounded-full p-1"
              >
                <BiUser />
              </Link>
            </div>
          </div>
          <div className="mt-20 flex flex-col gap-10 items-center w-full">
            <img
              src="https://b.zmtcdn.com/web_assets/8313a97515fcb0447d2d77c276532a511583262271.png"
              alt="ZomatoLogo"
              className="w-60 h-30"
            />
            <h1>Discover the best food & drinks in Hampi-Hospet</h1>
            <div className="bg-white p-3 flex flex-row text-gray-400 w-1/2 text-sm rounded-md">
              <MdLocationPin className="text-zomato-300 mr-4 text-xl" />
              <input
                type="text"
                className="border-r-2 w-1/4 border-r-2 border-gray-400 focus:outline-none"
                placeholder="Location"
              />
              <BsSearch className=" mr-5 ml-5 text-gray-500 text-xl" />
              <input
                type="text"
                className="w-3/4 border-none focus:outline-none"
                placeholder="Search for a restaurant, cuisine or a dish"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
const HomeNavBar = () => {
  return (
    <>
      <nav>
        <div className="md:hidden shadow-md">
          <NavSm />
        </div>

        {/* <div className="hidden md:flex lg:hidden">
          <NavMd />
        </div> */}

        <div className="hidden md:hidden lg:flex">
          <NavLg />
        </div>
      </nav>
    </>
  );
};

export default HomeNavBar;
