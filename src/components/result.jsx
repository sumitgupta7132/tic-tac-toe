import React from "react";
const Result = ({ winner, handleReset }) => {
  return (
    <div className="result">
      {winner === "Circle" && "Circle won the game"}
      {winner === "Cross" && "Cross won the game"}
      {winner === "Tie" && "It is a tie"}
      <br />
      <button onClick={() => handleReset()} className="reset-btn">
        Play Again
      </button>
    </div>
  );
};

export default Result;
