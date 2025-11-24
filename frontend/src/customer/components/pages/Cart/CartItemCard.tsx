import { Add, Close, Remove } from "@mui/icons-material";
import { Button, Divider, IconButton } from "@mui/material";
import React from "react";
import { CartItem } from "../../../../types/cartTypes";
import { useAppDispatch } from "../../../../State/Store";
import { updateCartItem } from "../../../../State/customer/cartSlice";

const CartItemCard = ({item}:{item:CartItem}) => {

  const dispatch=useAppDispatch()

  const handelUpdateQuantity = (value:number) =>()=> {

    dispatch(updateCartItem({jwt:localStorage.getItem("jwt"),
      cartItemId:item.id,
      cartItem:{quantity:item.quantity+value}
    }))
  };

  return (
    <div className="border rounded-md relative">

      <div className="p-5 flex gap-3">
        <div>
          <img
            className="w-[90px] rounded-md"
            src={item.product.images[0]}
            alt=""
          />
        </div>

        <div className="space-y-2">
          <h1 className="font-semibold text-lg text-gray-800">
            {item.product.seller?.businessDetails.businessName}
          </h1>
          <p className="text-gray-700 font-medium text-sm">
           {item.product.title}
          </p>

          <p className="text-gray-400 text-sm">
            <strong>Shold by : </strong> MannuLaal PVT LTD
          </p>
          <p className="text-sm">7 Days Replacement available</p>
          <p className="text-sm text-gray-600">
            <strong>quantity :</strong>{item.quantity}
          </p>
        </div>
      </div>
      <Divider />

      <div className="flex justify-between items-center">
        <div className="px-5 py-2 flex justify-between items-center">
          <div className="flex items-center gap-2 w-[140px] justify-between">
            <Button onClick={handelUpdateQuantity(-1)} disabled={true}>
              <Remove />
            </Button>
            <span>{item.quantity}</span>
            <Button onClick={handelUpdateQuantity(1)}>
              <Add />
            </Button>
          </div>
        </div>
        <div className="pr-10 ">
          <p className="text-gray-600 font-medium"> ₹ {item.sellingPrice}</p>
        </div>
      </div>

      <div className="absolute top-1 right-1">
        <IconButton color="primary">
          <Close />
        </IconButton>
      </div>
    </div>
  );
};

export default CartItemCard;
