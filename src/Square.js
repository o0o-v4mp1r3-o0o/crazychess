import React from "react";
import "./Square.css";
import knightImage from "./Images/Knight.png";

function Square(increment, input, knightMoves) {
  input = input + 1;
  let hasKnight = false;
  return increment % 2 === 0 ? (
    <div
      id={input}
      className="sqblack"
      onClick={() => {
        console.log(input);
        hasKnight = true;
      }}
      imadethisuplol="sqare"
    >
      {hasKnight ? <img src={knightImage} alt="knightImage"></img> : null}
    </div>
  ) : (
    <div
      id={input}
      className="sqwhite"
      onClick={() => {
        console.log(input);
        console.log(knightMoves.has(input) ? knightMoves : input);
      }}
      imadethisuplol="sqare"
    >
      {hasKnight ? <img src={knightImage} alt="knightImage"></img> : null}
    </div>
  );
}

export default Square;
