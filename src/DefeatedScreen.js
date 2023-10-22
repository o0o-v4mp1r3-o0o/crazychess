import React from "react";
import "./DefeatedScreen.css";
import { menuButton, menuButtonH } from "./Images";

function DefeatedScreen({ setVisible, setMenuScreen }) {
  return (
    <div className="defeated">
      <div className="diedtext">
        You Died
        <div
          className="backToMenu"
          onClick={(e) => {
            setVisible(false);
            setMenuScreen(true);
          }}
        >
          <h1 className="backText">Back To Menu</h1>
        </div>
      </div>
    </div>
  );
}

export default DefeatedScreen;
