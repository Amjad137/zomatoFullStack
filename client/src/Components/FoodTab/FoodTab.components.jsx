import React, { useEffect, useState } from "react";
import { BsHandbag } from "react-icons/bs";
import { IoMdBeer } from "react-icons/io";
import { GiMorgueFeet } from "react-icons/gi";
import { Link, useParams } from "react-router-dom";
const TabSm = () => {
  const [allTypes, setAllTypes] = useState([
    {
      id: `delivery`,
      icon: <BsHandbag />,
      name: "Delivery",
      isActive: false,
    },
    {
      id: `night`,
      icon: <IoMdBeer />,
      name: "Night Life",
      isActive: false,
    },
    {
      id: `dining`,
      icon: <GiMorgueFeet />,
      name: "Dining Out",
      isActive: false,
    },
  ]);
  const { type } = useParams();

  return (
    <div className="lg:hidden bg-white shadow-inner fixed bottom-0 p-3 z-10 flex w-full items-center justify-between md:justify-evenly text-gray-500 border">
      {allTypes.map((items) => (
        <Link to={`/${items.id}`}>
          <div
            className={
              type === items.id
                ? "flex flex-col relative items-center text-xl text-zomato-400"
                : "flex flex-col items-center text-xl"
            }
          >
            <div
              className={
                type === items.id &&
                "absolute -top-3 w-full h-2 border-t-2 border-zomato-400"
              }
            />
            {items.icon}
            <h5 className="text-sm">{items.name}</h5>
          </div>
        </Link>
      ))}
    </div>
  );
};

const FoodTab = () => {
  return (
    <>
      <TabSm />
    </>
  );
};

export default FoodTab;
