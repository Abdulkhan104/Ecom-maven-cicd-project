import { Divider } from "@mui/material";
import React from "react";

const PriceingCard = () => {
  return (
    <>
      <div className="space-y-3 p-5">
        <div className="flex justify-between items-center">
          <span>Subtotal</span>
          <span>Rs899</span>
        </div>

        <div className="flex justify-between items-center">
          <span>Discount</span>
          <span>Rs399</span>
        </div>

        <div className="flex justify-between items-center">
          <span>Shipping</span>
          <span>Rs40</span>
        </div>

        <div className="flex justify-between items-center ">
          <span>PlateForm Fee</span>
          <span className="text-primary-color">Free</span>
        </div>
      </div>
      <Divider />
      <div className="flex justify-between items-center p-5 text-primary-color">
        <span>Total ::</span>
        <span>Rs 540</span>
      </div>
    </>
  );
};

export default PriceingCard;
