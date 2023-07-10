import React from "react";
import { useParams } from "react-router-dom";
import DefaultLayout from "../../Layouts/Default.layout";
import Delivery from "../../Pages/Delivery.page";
const Cindex = () => {
  const { type } = useParams();
  return (
    <>
      <div className="m-4">{type === "delivery" && <Delivery />}</div>
    </>
  );
};

export default DefaultLayout(Cindex);
