import React from "react";

function Knight(x, y, board) {
  let knightMoves = [
    [2, 1],
    [2, -1],
    [-2, 1],
    [-2, -1],
    [1, -2],
    [1, 2],
    [-1, -2],
    [-1, 2],
  ];

  let validMoves = new Set();

  for (let i = 0; i < knightMoves.length; i++) {
    if (
      x + knightMoves[i][0] < 8 &&
      x + knightMoves[i][0] >= 0 &&
      y + knightMoves[i][1] < 8 &&
      y + knightMoves[i][1] >= 0
    ) {
      validMoves.add(
        board[x + knightMoves[i][0]][y + knightMoves[i][1]].props.id
      );
    }
  }

  return validMoves;
}

export default Knight;
