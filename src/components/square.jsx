import React from "react";
import Cross from "./cross";
import Circle from "./circle";
const Square = ({ position, value, handleClick }) => {
  return (
    <div onClick={() => handleClick(position)} className="square">
      {value === "Circle" && <Circle />}
      {value === "Cross" && <Cross />}
    </div>
  );
};

export default Square;
