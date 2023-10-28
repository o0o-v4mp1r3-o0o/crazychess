import React, { useEffect, useState } from "react";
import "./DefeatedScreen.css";
import { menuButton, menuButtonH } from "./Images";
import Database from "./Database";

function DefeatedScreen({ setVisible, setMenuScreen, levelNum }) {
  const [name, setName] = useState("");
  const [success, setSuccess] = useState(false);
  const [totalCount, settotalCount] = useState();
  const [rank, setrank] = useState();
  const time = new Date().getTime();
  async function grabRank() {
    const pool = Database();
    const rankStorage =
      await pool.sql`select rank(${levelNum.current},${time}) within group(order by score desc, time) rank from highscores`;
    setrank(Number(rankStorage.rows[0].rank));
    let rand = rankStorage.rows[0].rank;
    const totalCountStorage =
      await pool.sql`SELECT COUNT(name) from highscores`;
    settotalCount(Number(totalCountStorage.rows[0].count) + 1);
  }
  const handleSubmit = async (event) => {
    event.preventDefault();
    if (name.length === 0) return;
    const pool = Database();
    await pool.sql`INSERT INTO highscores values(${levelNum.current},${name},${time})`;
    setSuccess(true);
  };
  useEffect(() => {
    grabRank();
  }, []);
  console.log(time);

  //select dense_rank(1,5) within group(order by score desc, time) rank from highscores
  return (
    <div className="defeated">
      <div className="diedtext">
        {levelNum.current < 81 ? "You Died" : "You've Beaten the game!"}
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
      {!success ? (
        <form className="HSForm" onSubmit={handleSubmit}>
          <label>
            You've placed #{rank} out of {totalCount} total players! Enter your
            name and submit your score!
            <input
              className="userBox"
              maxLength={25}
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </label>
          <input className="submitButton" type="submit" />
        </form>
      ) : (
        <div className="successful">successfully submitted!</div>
      )}
    </div>
  );
}

export default DefeatedScreen;
