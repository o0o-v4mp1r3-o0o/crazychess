import React from "react";
import "./PickDifficulty.css";
import backgroundVid from "./Images/HD0360.mp4";
import {
  noviceImage,
  amateurImage,
  proImage,
  grandmasterImage,
} from "./Images";
function PickDifficulty({
  setVisible,
  backToMenu,
  level,
  showboard,
  maxlevel,
}) {
  level.current = maxlevel.current;
  return (
    <div>
      <video src={backgroundVid} autoPlay loop muted id="x" />
      <button
        onClick={(e) => {
          setVisible(false);
          backToMenu(true);
        }}
      >
        Back To Menu
      </button>
      <div className="buttonContainer">
        <button
          onClick={(e) => {
            if (maxlevel.current > 19) {
              level.current = 0;
            }
            setVisible(false);
            showboard(true);
          }}
        >
          <img src={noviceImage} alt="novice" width={300} height={600}></img>
          <p className="noviceP">Novice</p>
          <p className="noviceL">
            {maxlevel.current < 19 ? "Level:" + " " + maxlevel.current : null}
          </p>
        </button>
        <button
          onClick={(e) => {
            if (maxlevel.current > 19 && maxlevel.current <= 39) {
              setVisible(false);
              showboard(true);
            } else if (maxlevel.current > 39) {
              level.current = 20;
              setVisible(false);
              showboard(true);
            }
          }}
        >
          <img
            src={amateurImage}
            alt="amateur"
            width={300}
            height={600}
            style={{
              opacity: maxlevel.current > 19 ? 1 : 0.3,
            }}
          ></img>
          <p className="amateurP">Amateur</p>
          <p className="amateurL">
            {maxlevel.current > 19 && maxlevel.current <= 39
              ? "Level:" + " " + maxlevel.current
              : null}
          </p>
        </button>
        <button
          onClick={(e) => {
            if (maxlevel.current > 39 && maxlevel.current <= 59) {
              setVisible(false);
              showboard(true);
            } else if (maxlevel.current > 59) {
              level.current = 40;
              setVisible(false);
              showboard(true);
            }
          }}
        >
          <img
            src={proImage}
            alt="pro"
            width={300}
            height={600}
            style={{
              opacity: maxlevel.current > 39 ? 1 : 0.3,
            }}
          ></img>
          <p className="proP">Pro</p>
          <p className="proL">
            {maxlevel.current > 39 && maxlevel.current <= 59
              ? "Level:" + " " + maxlevel.current
              : null}
          </p>
        </button>
        <button
          onClick={(e) => {
            if (maxlevel.current > 59) {
              setVisible(false);
              showboard(true);
            }
          }}
        >
          <img
            src={grandmasterImage}
            alt="grandmaster"
            width={300}
            height={600}
            style={{
              opacity: maxlevel.current > 59 ? 1 : 0.3,
            }}
          ></img>
          <p className="grandmasterP">GrandMaster</p>
          <p className="grandmasterL">
            {maxlevel.current > 59 && maxlevel.current <= 81
              ? "Level:" + " " + maxlevel.current
              : null}
          </p>
        </button>
      </div>
    </div>
  );
}

export default PickDifficulty;
