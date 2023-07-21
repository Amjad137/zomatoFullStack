import React from "react";
import { BiUser } from "react-icons/bi";
import { MdLocationPin } from "react-icons/md";
import { Link } from "react-router-dom";
import { BsSearch } from "react-icons/bs";
function NavSm() {
  return (
    <>
      <div className="items-center justify-between flex w-full md:hidden m-5">
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
function NavMd() {
  return (
    <>
      <div className="items-center justify-between flex w-full lg:hidden m-5">
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
    <div className="items-center justify-between flex w-full m-5">
      <div className="w-28">
        <img
          src="https://b.zmtcdn.com/web_assets/b40b97e677bc7b2ca77c58c61db266fe1603954218.png"
          alt="logo"
          className="w-full h-full"
        />
      </div>
      <div className="bg-white p-3 flex flex-row text-gray-400 w-1/2 text-sm rounded-md border border-gray-300 shadow-md">
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
      <div className="flex items-center gap-3">
        <button className="bg-zomato-400 text-white py-2 px-3 rounded-full">
          Use App
        </button>
        <span className="border items-center justify-center pt-1  rounded-full p-1">
          <BiUser />
        </span>
      </div>
    </div>
  );
}
const NavBar = () => {
  return (
    <>
      <nav>
        <div className="md:hidden shadow-md">
          <NavSm />
        </div>

        <div className="hidden md:flex lg:hidden">
          <NavMd />
        </div>

        <div className="hidden md:hidden lg:flex">
          <NavLg />
        </div>
      </nav>
    </>
  );
};

export default NavBar;
