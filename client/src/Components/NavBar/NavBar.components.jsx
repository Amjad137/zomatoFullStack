import React from "react";
import { BiUser } from "react-icons/bi";
import { FaUserCircle } from "react-icons/fa";
import { Link } from "react-router-dom";

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
  return (
    <>
      <div className="container flex mx-auto items-center justify-between p-3">
        <Link to="#">Get the App</Link>
        <div className="flex gap-6">
          <Link to="#">Inventor Relations</Link>
          <Link to="#">Add Restaurants</Link>
          <Link to="#">Login</Link>
          <Link to="#">Sign Up</Link>
          <Link
            to="#"
            className="border items-center justify-center pt-1  rounded-full p-1"
          >
            <BiUser />
          </Link>
        </div>
      </div>
    </>
  );
}
const NavBar = () => {
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

export default NavBar;
