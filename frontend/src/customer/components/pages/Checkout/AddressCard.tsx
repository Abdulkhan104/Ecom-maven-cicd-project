import { Radio } from "@mui/material";
import React from "react";

const AddressCard = () => {
  const handleChange = (event: any) => {
    console.log(event.target.checked);
  };
  return (
    <div className="p-5 border rounded-md flex">
      <div>
        <Radio
          checked={true}
          onChange={handleChange}
          value=""
          name="radio-button"
        />
      </div>
      <div className="space-y-3 pt-3">
        <h1>Zosh</h1>
        <p className="w-[320px]">123 Main Street, Anytown, CA 91234</p>
        <strong>
          Mobile : <p>+91 989829919</p>
        </strong>
      </div>
    </div>
  );
};

export default AddressCard;
