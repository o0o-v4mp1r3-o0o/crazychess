import React, { useEffect, useRef, useState } from "react";
import "./HighScores.css";
import Database from "./Database";
import { createPool } from "@vercel/postgres";
import backgroundVid from "./Images/HD0360.mp4";

function HighScores({ setVisible, backToMenu }) {
  const name = useRef([]);
  const score = useRef([]);
  const [gg2, setgg2] = useState();
  async function ss() {
    const pool = Database();
    const { rows, fields } =
      await pool.sql`SELECT * FROM highscores ORDER BY Score DESC;`;
    return { rows, fields };
  }
  useEffect(() => {
    ss()
      .then((rows) =>
        rows.rows.map((nums) => {
          console.log(nums);
          name.current.push(nums.name);
          score.current.push(nums.score);
        })
      )
      .then(() => console.log(name.current))
      .then(() => setgg2(name.current));
  }, []);

  return (
    <div className="Scores">
      .
      <video src={backgroundVid} autoPlay loop muted id="x" />
      <button
        className="return"
        onClick={(e) => {
          setVisible(false);
          backToMenu(true);
          name.current = null;
          score.current = null;
        }}
      >
        Back To Menu
      </button>
      <div className="HSTable">
        <h2 className="LeaderTitle">Leaderboard</h2>
        <div className="databaseResults">
          <div className="User">
            {name.current.map((num, index) => (
              <div>
                #{index + 1} {num}
              </div>
            ))}
          </div>
          <div className="HighScore">
            {score.current.map((num) => (
              <div>{num}</div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default HighScores;
