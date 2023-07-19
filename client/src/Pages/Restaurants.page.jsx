import React, { useState } from "react";
import RestaurantLayout from "../Layouts/Restaurant.layout";
import { Form } from "react-router-dom";

const Restaurants = () => {
  const [restaurantData, setRestaurantData] = useState({
    name: "",
    city: "",
    address: "",
    photo: "",
  });

  let imageLocation;
  const handleSubmit = async (event) => {
    event.preventDefault();

    const fileInput = document.getElementById("photosInput");
    const formData = new FormData();
    formData.append("image", fileInput.files[0]);

    const imageResponse = await fetch("http://localhost:5500/image/r", {
      method: "POST",
      body: formData,
    })
      .then((response) => response.json())
      .then((data) => {
        // Access the location property of the uploadImage object
        const location = data.uploadImage.Location;
        imageLocation = location;
        // Use the location as needed in your frontend code
      });
    console.log(imageLocation);
    const restaurantResponse = await fetch(
      "http://localhost:5500/restaurants",
      {
        method: "POST",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify({
          credentials: {
            name: restaurantData.name,
            city: restaurantData.city,
            address: restaurantData.address,
          },
        }),
      }
    );

    const mesg = await restaurantResponse.json();

    if (restaurantResponse.ok) {
      alert("Restaurant data and image uploaded successfully");
    } else {
      const errorResponse = await imageResponse.json();
      const errorMessage = errorResponse.error; // Access the error message from the response
      alert(errorMessage);
    }
  };

  const OnChange = (e) => {
    setRestaurantData({ ...restaurantData, [e.target.name]: e.target.value });
  };

  function setPhoto() {
    setRestaurantData({ ...restaurantData, photo: imageLocation });
  }
  return (
    <div className=" ml-40 m-10 flex justify-center w-1/3 items-center border-2 rounded-lg border-gray-200 shadow-md shadow-slate-500 bg-slate-100">
      <form onSubmit={handleSubmit}>
        <div className="container items-start justify-center flex flex-col m-4 p-4 gap-4">
          <label className=" border-2 border-gray-200 p-2 rounded-md font-light">
            Restaurant Name:
            <input
              type="text"
              name="name"
              className="border-none focus:outline-none ml-2 bg-transparent"
              placeholder="Restaurant Name"
              onChange={OnChange}
              value={restaurantData.name}
            />
          </label>
          <label className=" border-2 border-gray-200 p-2 rounded-md font-light">
            Address:
            <input
              type="text"
              name="address"
              className="border-none focus:outline-none ml-2 bg-transparent"
              placeholder="Address"
              onChange={OnChange}
              value={restaurantData.address}
            />
          </label>
          <label className=" border-2 border-gray-200 p-2 rounded-md font-light">
            City:
            <input
              type="text"
              name="city"
              className="border-none focus:outline-none ml-2 bg-transparent"
              placeholder="City"
              onChange={OnChange}
              value={restaurantData.city}
            />
          </label>
          <label className=" border-2 border-gray-200 p-2 rounded-md font-light">
            Restaurant Timing:
            <input
              type="text"
              className="border-none focus:outline-none ml-2 bg-transparent"
              placeholder="City"
              onChange={OnChange}
            />
          </label>
          <label className=" border-2 border-gray-200 p-2 rounded-md font-light">
            Photos:
            <input
              type="file"
              id="photosInput"
              className="border-none focus:outline-none ml-2 bg-transparent"
              placeholder="Photos"
              onChange={setPhoto}
            />
          </label>
        </div>
        <div className="m-5">
          <button
            type="submit"
            className="border-2 border-zomato-400 p-2 rounded-lg ml-40"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default RestaurantLayout(Restaurants);
