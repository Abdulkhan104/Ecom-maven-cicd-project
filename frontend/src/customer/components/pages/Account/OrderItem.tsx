import { ElectricBolt } from "@mui/icons-material";
import { Avatar } from "@mui/material";
import { teal } from "@mui/material/colors";
import React from "react";

const OrderItem = () => {
  return (
    <div className="text-sm bg-white p-5 space-y-4 border rounded-md cursor-pointer ">
      <div className="flex items-center gap-5">
        <div>
          <Avatar sizes="small" sx={{ backgroundColor: teal[500] }}>
            <ElectricBolt />
          </Avatar>
        </div>

        <div>
          <h1 className="font-bold text-primary-color">PENDING</h1>
          <p>Arriving By Mon, 15 jul</p>
        </div>
      </div>

      <div className="p-5 bg-teal-50 flex gap-3">
        <div>
          <img
            className="w-[70px]"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQUUevVe0o9fWx6HPCXHRuuGAf8YIZ3qkU2-A&s"
            alt=""
          />
        </div>
        <div className="w-full space-y-2">
          <h1 className="font-bold">Virani Clothing</h1>
          <p className="text-gray-500">
            The design typically leans towards a modern, athletic look, with
            bold colors, large dials, and prominent subdials for chronograph
            functions. Luminous hands and markers ensure excellent readability
            in low-light conditions.
          </p>
          <p>
            <strong>size :</strong>FREE
          </p>
        </div>
      </div>
    </div>
  );
};
       
export default OrderItem;
