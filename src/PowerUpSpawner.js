import React from "react";
import { useEffect, useState, useRef } from "react";

function PowerUpSpawner(powerUpBoardRef, knightBoard, pawnBoard) {
  if (knightBoard == null || pawnBoard == null) return;
  let boardInt = Math.round(Math.random() * 63);
  let powerupInt = Math.round(Math.random() * 7);
  if (!knightBoard[boardInt] && !pawnBoard[boardInt]) {
    powerUpBoardRef[boardInt] = powerupInt;
  }
  return;
}

export default PowerUpSpawner;
