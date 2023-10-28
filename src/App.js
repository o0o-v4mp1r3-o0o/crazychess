import "./App.css";
import Board from "./Board";
import { useState, useRef } from "react";
import NextLevel from "./NextLevel";
import DefeatedScreen from "./DefeatedScreen";
import Menu from "./Menu";
import EnterCode from "./EnterCode";
import PickDifficulty from "./PickDifficulty";
import HighScores from "./HighScores";
function App() {
  const [MenuScreen, setMenuScreen] = useState(true);
  const [showBoard, setShowBoard] = useState(false);
  const [defeatedScreen, setdefeatedScreen] = useState(false);
  const [codeScreen, setCodeScreen] = useState(false);
  const [difficultyScreen, setDifficultyScreen] = useState(false);
  const [highScoreScreen, sethighScoreScreen] = useState(false);
  const level = useRef(0);
  const maxlevel = useRef(0);
  function pagePicker() {
    console.log("rendered");
    if (MenuScreen) {
      return (
        <Menu
          setVisible={setMenuScreen}
          setDifficulty={setDifficultyScreen}
          setCode={setCodeScreen}
          setHS={sethighScoreScreen}
        />
      );
    } else if (codeScreen) {
      return (
        <EnterCode
          level={level}
          setVisible={setCodeScreen}
          backToMenu={setMenuScreen}
          maxlevel={maxlevel}
        />
      );
    } else if (difficultyScreen) {
      return (
        <PickDifficulty
          setVisible={setDifficultyScreen}
          backToMenu={setMenuScreen}
          level={level}
          showboard={setShowBoard}
          maxlevel={maxlevel}
        />
      );
    } else if (highScoreScreen) {
      return (
        <HighScores
          setVisible={sethighScoreScreen}
          backToMenu={setMenuScreen}
        />
      );
    } else if (showBoard && !defeatedScreen) {
      return (
        <Board
          setVisible={setShowBoard}
          setDefeat={setdefeatedScreen}
          setLevel={level}
          setMaxLevel={maxlevel}
          setMenuScreen={setMenuScreen}
        />
      );
    } else if (!showBoard && !defeatedScreen) {
      return <NextLevel levelnum={level} setVisible={setShowBoard} />;
    } else if (defeatedScreen) {
      return (
        <DefeatedScreen
          setVisible={setdefeatedScreen}
          setMenuScreen={setMenuScreen}
          levelNum={level}
        />
      );
    }
  }
  return (
    <div className="App">
      <header></header>
      {pagePicker()}
    </div>
  );
}

export default App;
