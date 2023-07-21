import React, { useState } from "react";
import RestaurantLayout from "../Layouts/Restaurant.layout";
import { Form } from "react-router-dom";
import axios from "axios";
const Restaurants = () => {
  const [restaurantData, setRestaurantData] = useState({
    name: "",
    city: "",
    menu: "",
    averageCost: "",
  });

  let imageID;

  const handleSubmit = async (event) => {
    try {
      event.preventDefault();

      const fileInput = document.getElementById("photosInput");
      const formData = new FormData();
      formData.append("image", fileInput.files[0]);

      // const imageResponse = await fetch("http://localhost:5500/image", {
      //   method: "POST",
      //   body: formData,
      // })

      const imageResponse = await axios.post("/image", formData);

      const id = imageResponse.data._id;

      imageID = id;

      // console.log(imageID);

      // const restaurantResponse = await fetch(
      //   "http://localhost:5500/restaurants",
      //   {
      //     method: "POST",
      //     headers: {
      //       "Content-type": "application/json",
      //     },
      //     body: JSON.stringify({
      //       credentials: {
      //         name: restaurantData.name,
      //         city: restaurantData.city,
      //         menu: restaurantData.address,
      //         averageCost: restaurantData.averageCost,
      //         photos: imageID,
      //       },
      //     }),
      //   }
      // );

      const requestBody = {
        credentials: {
          name: restaurantData.name,
          city: restaurantData.city,
          menu: restaurantData.menu,
          averageCost: restaurantData.averageCost,
          photos: imageID,
        },
      };

      const restaurantResponse = await axios.post("/restaurants", requestBody, {
        headers: {
          "Content-type": "application/json",
        },
      });

      alert("Restaurant data and image uploaded successfully");
    } catch (error) {
      console.error(error);
    }
  };

  const OnChange = (e) => {
    setRestaurantData({ ...restaurantData, [e.target.name]: e.target.value });
  };

  return (
    <div className="m-5 mx-auto flex justify-center lg:w-1/2 items-center border-2 rounded-lg border-gray-200 shadow-md shadow-slate-500 bg-slate-100">
      <form onSubmit={handleSubmit}>
        <div className="container items-start justify-center flex flex-col m-4 p-4 gap-4">
          <input
            type="text"
            name="name"
            className="border-2 border-gray-400 rounded-md font-light p-2 focus:outline-none bg-transparent"
            placeholder="Restaurant Name"
            onChange={OnChange}
            value={restaurantData.name}
          />

          <input
            type="text"
            name="city"
            className="border-2 border-gray-400 rounded-md font-light p-2 focus:outline-none bg-transparent"
            placeholder="City"
            onChange={OnChange}
            value={restaurantData.city}
          />

          <input
            type="text"
            name="menu"
            className="border-2 border-gray-400 rounded-md font-light p-2 focus:outline-none bg-transparent"
            placeholder="Menu"
            onChange={OnChange}
            value={restaurantData.menu}
          />

          <input
            type="text"
            className="border-2 border-gray-400 rounded-md font-light p-2 focus:outline-none bg-transparent"
            name="averageCost"
            placeholder="Average Cost"
            value={restaurantData.averageCost}
            onChange={OnChange}
          />

          <input
            type="file"
            id="photosInput"
            className="border-2 border-gray-400 rounded-md font-light p-2 focus:outline-none bg-transparent"
            placeholder="Photos"
          />
        </div>
        <div className="m-5">
          <button
            type="submit"
            className="border-2 bg-zomato-400 p-2 text-white rounded-lg ml-40"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default RestaurantLayout(Restaurants);
