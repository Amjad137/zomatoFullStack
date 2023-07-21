import React, { useEffect, useState } from "react";
import DeliveryCarousel from "../Components/Delivery/DeliveryCarousel.components";
import Carousel from "../Components/Carousel/Carousel.components";
import axios from "axios";

const Delivery = () => {
  const [restaurantData, setRestaurantData] = useState([]);

  // useEffect(() => {
  //   const requestRestaurantData = async () => {
  //     const getRestaurantData = await axios.get("/restaurants/r");
  //     setRestaurantData(getRestaurantData.data.restaurants);
  //   };
  //   requestRestaurantData();
  // }, []);

  useEffect(() => {
    const requestRestaurantData = async () => {
      const getRestaurantData = await axios.get("/restaurants/r");
      const restaurants = getRestaurantData.data.restaurants;

      // Fetch image data for each restaurant
      const restaurantDataWithImages = await Promise.all(
        restaurants.map(async (restaurant) => {
          const imageResponse = await axios.get(`/image/${restaurant.photos}`);
          const imageLocation = imageResponse.data.location;

          // Merge the imageLocation into the restaurant object
          return {
            ...restaurant,
            imageLocation,
          };
        })
      );

      setRestaurantData(restaurantDataWithImages);
    };

    requestRestaurantData();
  }, []);

  return (
    <>
      <DeliveryCarousel />
      <Carousel
        title="Collections"
        subtitle="Explore our best collections"
        cardDetails={restaurantData}
      />
    </>
  );
};

export default Delivery;
