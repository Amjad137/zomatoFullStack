import React from "react";

const ImageHolder = (props) => {
  return (
    <div className="flex flex-col h-100 w-80 overflow-hidden shadow-lg border border-gray-200 rounded-lg">
      <img
        src={props.imageLocation}
        alt="CardImage"
        className="w-80 h-60 object-cover rounded-lg"
      />
      <div className="flex flex-col p-2 ">
        <div className="flex flex-row justify-between mb-4">
          <h1 className=" font-normal text-gray-800 text-xl">{props.name}</h1>
          <h2 className="font-light text-white text-sm bg-green-500 rounded-lg p-1">
            {props.city}
          </h2>
        </div>
        <div className="flex ">
          <h5 className="font-light text-gray-500 text-ellipsis text-start inline overflow-clip">
            {props.menu}
          </h5>
          <h5 className="font-light text-gray-500">
            {props.averageCost}/- for One
          </h5>
        </div>
      </div>
    </div>
  );
};

export default ImageHolder;
