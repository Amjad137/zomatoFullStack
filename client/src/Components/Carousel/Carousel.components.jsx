import React from "react";
import ImageHolder from "./ImageHolder.components";
const Carousel = (props) => {
  const { title, subtitle, cardDetails } = props;

  return (
    <div className="flex justify-start flex-col gap-2 m-4">
      <h1>{title}</h1>

      <h2>{subtitle}</h2>

      <div className="flex flex-row content-around gap-5">
        {cardDetails.map((each, index) => (
          <ImageHolder {...each} key={index} />
        ))}
      </div>
    </div>
  );
};

export default Carousel;
