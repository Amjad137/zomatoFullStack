import React from "react";
import { useParams } from "react-router-dom";
import DefaultLayout from "../../Layouts/Default.layout";
import Delivery from "../../Pages/Delivery.page";
import NightLife from "../../Pages/NightLife.page";
import Dining from "../../Pages/Dining.page";
const Cindex = () => {
  const { type } = useParams();
  return (
    <>
      <div className="m-4">{type === "delivery" && <Delivery />}</div>
      <div className="m-4">{type === "night" && <NightLife />}</div>
      <div className="m-4">{type === "dining" && <Dining />}</div>
    </>
  );
};

export default DefaultLayout(Cindex);
