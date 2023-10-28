import React, { useState } from "react";
import "./Menu.css";
import { menuButton, menuButtonH } from "./Images";
import Database from "./Database";
function Menu({ setVisible, setDifficulty, setCode, setHS }) {
  const [hoverGame, sethoverGame] = useState(false);
  const [hoverCode, sethoverCode] = useState(false);
  const [hoverScore, sethoverScore] = useState(false);
  return (
    <div className="menu">
      <h1 className="mainTitle">The Lone Knight</h1>
      <div className="allButtons">
        <button
          className="playGame"
          onClick={(e) => {
            setVisible(false);
            setDifficulty(true);
          }}
          onMouseEnter={(e) => {
            sethoverGame(true);
          }}
          onMouseLeave={(e) => {
            sethoverGame(false);
          }}
        >
          <img
            src={hoverGame ? menuButtonH : menuButton}
            width={300}
            alt="play"
          ></img>
          <p className="playP">Play</p>
        </button>
        <button
          className="code"
          onClick={(e) => {
            setVisible(false);
            setCode(true);
          }}
          onMouseEnter={(e) => {
            sethoverCode(true);
          }}
          onMouseLeave={(e) => {
            sethoverCode(false);
          }}
        >
          <img
            src={hoverCode ? menuButtonH : menuButton}
            width={300}
            alt="play"
          ></img>
          <p className="codeP">Enter Code</p>
        </button>
        <button
          className="getHighScores"
          onClick={(e) => {
            setVisible(false);
            setHS(true);
          }}
          onMouseEnter={(e) => {
            sethoverScore(true);
          }}
          onMouseLeave={(e) => {
            sethoverScore(false);
          }}
        >
          <img
            src={hoverScore ? menuButtonH : menuButton}
            width={300}
            alt="play"
          ></img>
          <p className="scoresP">High Scores</p>
        </button>
      </div>
    </div>
  );
}

export default Menu;
