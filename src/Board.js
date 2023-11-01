import React, { useRef } from "react";
import { useEffect, useState } from "react";
import "./Board.css";
import "./Knight.css";
import Knight from "./Knight";
import backgroundVid from "./Images/HD0360.mp4";
import PowerUps from "./PowerUps";
import Square from "./Square";
import {
  castleImage,
  knightImage,
  pawnImage,
  heartImage,
  explosionImage,
  knightExplosionImage,
  invisImage,
  mirrorKnightImage,
  blackpawnImage,
  freezeImage,
  mirrorKnightBoardImage,
  blackpawnCursor,
  explosiveKnightImage,
  frozenPawnImage,
} from "./Images";
import PowerUpSpawner from "./PowerUpSpawner";
import LevelConstructor from "./LevelConstructor";

function Board({
  setVisible,
  setDefeat,
  setLevel,
  setMaxLevel,
  setMenuScreen,
}) {
  const rows = 8;
  const columns = 8;
  const [chessBoard, setChessBoard] = useState([]);
  const [testBoard, settestBoard] = useState([]);
  const [boolBoard, setboolBoard] = useState([]);
  const [pawnBoard, setpawnBoard] = useState([]);
  const prevind = useRef();
  const [km, setkm] = useState();
  //const [indexMap, setindexMap] = useState();
  //const [pawnList, setpawnList] = useState();
  const [hotbarList, sethotbarList] = useState(new Array(5));
  const newHotBarList = useRef(new Array(5));
  const realPawnBoard = useRef(Array(64).fill(false));
  const boolboard = useRef(Array(64).fill(false));
  const pawnList = useRef(new Map());
  const indexMap = useRef(new Map());
  const level = useRef();
  const lives = useRef();
  const numPawns = useRef(0);
  const levelArray = useRef([]);
  const powerUpLocations = useRef(Array(64).fill(0));
  const [explosionLocations, setExplosions] = useState(Array(64).fill(false));
  const invisTimer = useRef(false);
  const freezeTimer = useRef(false);
  const freezeAnimation = useRef(false);
  const knightExplosionTimer = useRef(false);
  const mirrorKnightExists = useRef(false);
  const mirrorKnightLocation = useRef();
  const [allyPawnSelected, setallyPawnSelected] = useState(false);
  const allyPawnArray = useRef(Array(64).fill(false));
  const powerUpTimer = useRef(0);
  const gameRef = useRef();
  const deathFlag = useRef(0);
  const levelSpeed = useRef(0);

  function square(x, y, increment, input) {
    input = input + 1;
    return increment % 2 === 0 ? (
      <div
        id={input}
        className="sqblack"
        onMouseDown={(e) => {
          console.log(input);
          console.log("y" + prevind.current);
          console.log(km);
          if (allyPawnSelected) {
            if (e.nativeEvent.button === 2) {
              console.log("right click");
              setallyPawnSelected(false);
              return;
            }
            if (
              !boolboard.current[input - 1] &&
              !realPawnBoard.current[input - 1] &&
              !powerUpLocations.current[input - 1] &&
              input > 8
            ) {
              //do action
              let gg = [...hotbarList];
              let breaker = false;
              for (let i = 0; i < hotbarList.length; i++) {
                if (!breaker) {
                  if (gg[i] === 2) {
                    gg[i] = 0;
                    breaker = true;
                  }
                }
              }
              allyPawnArray.current[input - 1] = true;
              boolboard.current[input - 1] = true;
              sethotbarList(gg);
              setallyPawnSelected(false);
              console.log("valid square");
            } else {
              console.log("invalid square");
            }
            return;
          }
          newHotBarList.current = [...hotbarList];
          let wasPowerAdded = false;
          if (km.has(input)) {
            if (allyPawnArray.current[input - 1]) {
              allyPawnArray.current[input - 1] = false;
            }
            boolboard.current[input - 1] = true;
            boolboard.current[prevind.current - 1] = false;
            if (mirrorKnightExists.current) {
              let prevx = indexMap.current.get(prevind.current - 1).x;
              let prevy = indexMap.current.get(prevind.current - 1).y;
              let prevMirrorMove =
                testBoard[mirrorNumber(prevx)][mirrorNumber(prevy)].props.id -
                1;
              let mirrorMove =
                testBoard[mirrorNumber(x)][mirrorNumber(y)].props.id - 1;
              mirrorKnightLocation.current = indexMap.current.get(mirrorMove);
              boolboard.current[mirrorMove] = true;
              boolboard.current[prevMirrorMove] = false;
              if (allyPawnArray.current[mirrorMove]) {
                allyPawnArray.current[mirrorMove] = false;
              }
              if (pawnList.current.has(mirrorMove)) {
                realPawnBoard.current[mirrorMove] = false;
                let iteratePawnList = pawnList.current;
                iteratePawnList.delete(mirrorMove);
                pawnList.current = iteratePawnList;
                //setpawnList(iteratePawnList);
                numPawns.current = numPawns.current - 1;
                console.log("DELETED!");
              }

              if (powerUpLocations.current[mirrorMove] > 0) {
                if (powerUpLocations.current[mirrorMove] === 1) {
                  lives.current++;
                  wasPowerAdded = true;
                } else {
                  wasPowerAdded = addPowerToHotBar(
                    powerUpLocations.current[mirrorMove]
                  );
                }
                if (wasPowerAdded) powerUpLocations.current[mirrorMove] = 0;
                gameRef.current.focus();
              }
            }
            prevind.current = input;
            setkm(Knight(x, y, exarray));

            if (pawnList.current.has(input - 1)) {
              realPawnBoard.current[input - 1] = false;
              let iteratePawnList = pawnList.current;
              iteratePawnList.delete(input - 1);
              pawnList.current = iteratePawnList;
              //setpawnList(iteratePawnList);
              numPawns.current = numPawns.current - 1;
              console.log("DELETED!");
            }
            if (knightExplosionTimer.current) {
              knightExplosionPower(input - 1);
            }
            if (powerUpLocations.current[input - 1] > 0) {
              wasPowerAdded = false;
              if (powerUpLocations.current[input - 1] === 1) {
                lives.current++;
                powerUpLocations.current[input - 1] = 0;
              } else {
                wasPowerAdded = addPowerToHotBar(
                  powerUpLocations.current[input - 1]
                );
              }
              gameRef.current.focus();
            }
            if (wasPowerAdded) {
              sethotbarList(newHotBarList.current);
              powerUpLocations.current[input - 1] = 0;
            }
          }
          arePawnsDead();
        }}
        x={x}
        y={y}
      >
        {boolboard.current[input - 1] &&
        !invisTimer.current &&
        !allyPawnArray.current[input - 1] ? (
          mirrorKnightLocation.current.x === x &&
          mirrorKnightLocation.current.y === y ? (
            <img src={mirrorKnightBoardImage} alt="MK"></img>
          ) : knightExplosionTimer.current ? (
            <img src={explosiveKnightImage} alt="K"></img>
          ) : (
            <img src={knightImage} alt="K"></img>
          )
        ) : null}
        {realPawnBoard.current[input - 1] ? (
          freezeAnimation.current ? (
            <img src={frozenPawnImage} alt="P"></img>
          ) : (
            <img src={pawnImage} alt="P"></img>
          )
        ) : null}
        {allyPawnArray.current[input - 1] ? (
          <img src={blackpawnImage} alt="P"></img>
        ) : null}
        {powerUpLocations.current[input - 1] === 1 ? (
          <img src={heartImage} alt="P"></img>
        ) : null}
        {powerUpLocations.current[input - 1] === 2 ? (
          <img src={invisImage} alt="P"></img>
        ) : null}
        {powerUpLocations.current[input - 1] === 3 ? (
          <img src={blackpawnCursor} alt="P"></img>
        ) : null}
        {powerUpLocations.current[input - 1] === 4 ? (
          <img src={knightExplosionImage} alt="P"></img>
        ) : null}
        {powerUpLocations.current[input - 1] === 5 ? (
          <img src={explosionImage} alt="P"></img>
        ) : null}
        {powerUpLocations.current[input - 1] === 6 ? (
          <img src={mirrorKnightImage} alt="P"></img>
        ) : null}
        {powerUpLocations.current[input - 1] === 7 ? (
          <img src={freezeImage} alt="P"></img>
        ) : null}
        {explosionLocations[input - 1] ? (
          <img src={knightExplosionImage} alt="P"></img>
        ) : null}
      </div>
    ) : (
      <div
        id={input}
        className="sqwhite"
        onMouseDown={(e) => {
          console.log(input);
          console.log("y" + prevind.current);
          console.log(km);
          if (allyPawnSelected) {
            if (e.nativeEvent.button === 2) {
              console.log("right click");
              setallyPawnSelected(false);
              return;
            }
            if (
              !boolboard.current[input - 1] &&
              !realPawnBoard.current[input - 1] &&
              !powerUpLocations.current[input - 1] &&
              input > 8
            ) {
              //do action
              let gg = [...hotbarList];
              let breaker = false;
              for (let i = 0; i < hotbarList.length; i++) {
                if (!breaker) {
                  if (gg[i] === 2) {
                    gg[i] = 0;
                    breaker = true;
                  }
                }
              }
              sethotbarList(gg);
              setallyPawnSelected(false);
              allyPawnArray.current[input - 1] = true;
              boolboard.current[input - 1] = true;
              console.log("valid square");
            } else {
              console.log("invalid square");
            }
            return;
          }
          newHotBarList.current = [...hotbarList];
          let wasPowerAdded = false;
          if (km.has(input)) {
            if (allyPawnArray.current[input - 1]) {
              allyPawnArray.current[input - 1] = false;
            }
            boolboard.current[input - 1] = true;
            boolboard.current[prevind.current - 1] = false;
            if (mirrorKnightExists.current) {
              let prevx = indexMap.current.get(prevind.current - 1).x;
              let prevy = indexMap.current.get(prevind.current - 1).y;
              let prevMirrorMove =
                testBoard[mirrorNumber(prevx)][mirrorNumber(prevy)].props.id -
                1;
              let mirrorMove =
                testBoard[mirrorNumber(x)][mirrorNumber(y)].props.id - 1;
              mirrorKnightLocation.current = indexMap.current.get(mirrorMove);
              boolboard.current[mirrorMove] = true;
              boolboard.current[prevMirrorMove] = false;
              if (allyPawnArray.current[mirrorMove]) {
                allyPawnArray.current[mirrorMove] = false;
              }
              if (pawnList.current.has(mirrorMove)) {
                realPawnBoard.current[mirrorMove] = false;
                let iteratePawnList = pawnList.current;
                iteratePawnList.delete(mirrorMove);
                pawnList.current = iteratePawnList;
                //setpawnList(iteratePawnList);
                numPawns.current = numPawns.current - 1;
                console.log("DELETED!");
              }

              if (powerUpLocations.current[mirrorMove] > 0) {
                if (powerUpLocations.current[mirrorMove] === 1) {
                  lives.current++;
                  wasPowerAdded = true;
                } else {
                  wasPowerAdded = addPowerToHotBar(
                    powerUpLocations.current[mirrorMove]
                  );
                }
                if (wasPowerAdded) powerUpLocations.current[mirrorMove] = 0;
                gameRef.current.focus();
              }
            }
            prevind.current = input;
            setkm(Knight(x, y, exarray));
            if (pawnList.current.has(input - 1)) {
              realPawnBoard.current[input - 1] = false;
              let iteratePawnList = pawnList.current;
              iteratePawnList.delete(input - 1);
              pawnList.current = iteratePawnList;
              //setpawnList(iteratePawnList);
              numPawns.current = numPawns.current - 1;
              console.log("DELETED!");
            }
            if (knightExplosionTimer.current) {
              knightExplosionPower(input - 1);
            }
            console.log(document.activeElement);
            if (powerUpLocations.current[input - 1] > 0) {
              wasPowerAdded = false;
              if (powerUpLocations.current[input - 1] === 1) {
                lives.current++;
                wasPowerAdded = true;
                console.log(document.activeElement);
              } else {
                wasPowerAdded = addPowerToHotBar(
                  powerUpLocations.current[input - 1]
                );
              }
              if (wasPowerAdded) powerUpLocations.current[input - 1] = 0;
            }
            console.log(document.activeElement);
            gameRef.current.focus();
            if (wasPowerAdded) {
              sethotbarList(newHotBarList.current);
              powerUpLocations.current[input - 1] = 0;
            }
          }
          arePawnsDead();
        }}
        x={x}
        y={y}
      >
        {boolboard.current[input - 1] &&
        !invisTimer.current &&
        !allyPawnArray.current[input - 1] ? (
          mirrorKnightLocation.current.x === x &&
          mirrorKnightLocation.current.y === y ? (
            <img src={mirrorKnightBoardImage} alt="MK"></img>
          ) : knightExplosionTimer.current ? (
            <img src={explosiveKnightImage} alt="K"></img>
          ) : (
            <img src={knightImage} alt="K"></img>
          )
        ) : null}
        {realPawnBoard.current[input - 1] ? (
          freezeAnimation.current ? (
            <img src={frozenPawnImage} alt="P"></img>
          ) : (
            <img src={pawnImage} alt="P"></img>
          )
        ) : null}
        {allyPawnArray.current[input - 1] ? (
          <img src={blackpawnImage} alt="P"></img>
        ) : null}
        {powerUpLocations.current[input - 1] === 1 ? (
          <img src={heartImage} alt="P"></img>
        ) : null}
        {powerUpLocations.current[input - 1] === 2 ? (
          <img src={invisImage} alt="P"></img>
        ) : null}
        {powerUpLocations.current[input - 1] === 3 ? (
          <img src={blackpawnCursor} alt="P"></img>
        ) : null}
        {powerUpLocations.current[input - 1] === 4 ? (
          <img src={knightExplosionImage} alt="P"></img>
        ) : null}
        {powerUpLocations.current[input - 1] === 5 ? (
          <img src={explosionImage} alt="P"></img>
        ) : null}
        {powerUpLocations.current[input - 1] === 6 ? (
          <img src={mirrorKnightImage} alt="P"></img>
        ) : null}
        {powerUpLocations.current[input - 1] === 7 ? (
          <img src={freezeImage} alt="P"></img>
        ) : null}
        {explosionLocations[input - 1] ? (
          <img src={knightExplosionImage} alt="P"></img>
        ) : null}
      </div>
    );
  }

  function hotBarSquare(i) {
    return (
      <div
        className="hotkey"
        onMouseDown={() => {
          console.log("hotkeypressed");
          hotBarPower(i);
        }}
      >
        {hotbarList[i - 1] < 1 ? i : null}
        {hotbarList[i - 1] === 1 ? (
          <img src={invisImage} alt="invis"></img>
        ) : null}
        {hotbarList[i - 1] === 2 ? (
          <img src={blackpawnImage} alt="pawn"></img>
        ) : null}
        {hotbarList[i - 1] === 3 ? (
          <img src={knightExplosionImage} alt="explodingKnight"></img>
        ) : null}
        {hotbarList[i - 1] === 4 ? (
          <img src={explosionImage} alt="explodeAll"></img>
        ) : null}
        {hotbarList[i - 1] === 5 ? (
          <img src={mirrorKnightImage} alt="mirror"></img>
        ) : null}
        {hotbarList[i - 1] === 6 ? (
          <img src={freezeImage} alt="freeze"></img>
        ) : null}
      </div>
    );
  }

  function hotBarPower(i) {
    gameRef.current.focus();
    console.log(i + " this is it");
    if (hotbarList[i - 1] === 1) {
      //invis
      invisTimer.current = true;
      setTimeout(() => {
        invisTimer.current = false;
      }, 5000);
    } else if (hotbarList[i - 1] === 2) {
      setallyPawnSelected(true);
    } else if (hotbarList[i - 1] === 3) {
      knightExplosionTimer.current = true;
      setTimeout(() => {
        knightExplosionTimer.current = false;
      }, 10000);
    } else if (hotbarList[i - 1] === 4) {
      let pawnsOnBoardSize = pawnList.current.size;
      numPawns.current = numPawns.current - pawnsOnBoardSize;
      let arr = [...explosionLocations];
      for (let c of pawnList.current.keys()) {
        arr[c] = true;
      }
      setExplosions(arr);
      setTimeout(() => {
        setExplosions(Array(64).fill(false));
      }, 80);
      pawnList.current.clear();
      realPawnBoard.current.fill(false);
      arePawnsDead();
    } else if (hotbarList[i - 1] === 5) {
      mirrorKnightExists.current = true;
      let x = indexMap.current.get(prevind.current).x;
      let y = indexMap.current.get(prevind.current).y;
      let mirrorMove = testBoard[mirrorNumber(x)][mirrorNumber(y)].props.id;
      boolboard.current[mirrorMove] = true;
      mirrorKnightLocation.current = indexMap.current.get(mirrorMove);
    } else if (hotbarList[i - 1] === 6) {
      freezeTimer.current = true;
      freezeAnimation.current = true;
      setTimeout(() => {
        freezeTimer.current = false;
      }, 10000);
      setTimeout(() => {
        freezeAnimation.current = false;
      }, 8000);
    }
    if (hotbarList[i - 1] !== 2) {
      let gg = [...hotbarList];
      gg[i - 1] = 0;
      sethotbarList(gg);
    }
  }

  function addPowerToHotBar(powerNum) {
    for (let i = 0; i < 5; i++) {
      if (newHotBarList.current[i] === 0) {
        newHotBarList.current[i] = powerNum - 1;
        return true;
      }
    }
    return false;
  }

  function knightExplosionPower(input) {
    let explosionRadius = [
      [1, 1],
      [1, -1],
      [-1, 1],
      [-1, -1],
      [1, 0],
      [-1, 0],
      [0, 1],
      [0, -1],
    ];

    let x = indexMap.current.get(input).x;
    let y = indexMap.current.get(input).y;
    let arr = [...explosionLocations];
    for (let i = 0; i < explosionRadius.length; i++) {
      if (
        x + explosionRadius[i][0] < 8 &&
        x + explosionRadius[i][0] >= 0 &&
        y + explosionRadius[i][1] < 8 &&
        y + explosionRadius[i][1] >= 0
      ) {
        let explodingSquare =
          testBoard[x + explosionRadius[i][0]][y + explosionRadius[i][1]].props
            .id - 1;
        arr[explodingSquare] = true;
        if (pawnList.current.has(explodingSquare)) {
          realPawnBoard.current[explodingSquare] = false;
          let iteratePawnList = pawnList.current;
          iteratePawnList.delete(explodingSquare);
          pawnList.current = iteratePawnList;
          numPawns.current = numPawns.current - 1;
          console.log("EXPLODED!");
        }
      }
    }
    setExplosions(arr);
    setTimeout(() => {
      setExplosions(Array(64).fill(false));
    }, 80);
  }

  function mirrorNumber(origin) {
    if (origin === 0) origin = 7;
    else if (origin === 1) origin = 6;
    else if (origin === 2) origin = 5;
    else if (origin === 3) origin = 4;
    else if (origin === 4) origin = 3;
    else if (origin === 5) origin = 2;
    else if (origin === 6) origin = 1;
    else if (origin === 7) origin = 0;
    return origin;
  }

  function pawnSpawner() {
    if (levelArray.current.length > 0) {
      let wave = levelArray.current.pop();
      let indexchecker = new Set(wave);
      for (let i = 0; i < wave.length; i++) {
        let spawnSquare = wave[i] - 1;
        if (spawnSquare < 0) continue;
        if (
          realPawnBoard.current[spawnSquare] ||
          boolboard.current[spawnSquare]
        ) {
          let foundnewSquare = false;
          for (let c = 0; c < 8; c++) {
            if (
              !realPawnBoard.current[c] &&
              !boolboard.current[c] &&
              !indexchecker.has(c + 1)
            ) {
              spawnSquare = c;
              foundnewSquare = true;
              break;
            }
          }
          if (!foundnewSquare) {
            levelArray.current.push([wave[i] - 1]);
          }
        }
        realPawnBoard.current[spawnSquare] = true;
        pawnList.current.set(spawnSquare, indexMap.current.get(spawnSquare));
        if (powerUpLocations.current[spawnSquare] > 0) {
          powerUpLocations.current[spawnSquare] = 0;
        }
      }
      setpawnBoard(realPawnBoard.current);
    }
  }

  function arePawnsDead() {
    if (numPawns.current === 0) {
      if (setLevel.current < 81) {
        setLevel.current++;
        if (setLevel.current < 81) {
          setVisible(false);
        } else {
          setDefeat(true);
        }

        if (setLevel.current > setMaxLevel.current) {
          setMaxLevel.current = setLevel.current;
        }
      } else {
        setDefeat(true);
      }
    }
    if (lives.current === 0) {
      setDefeat(true);
    }
  }

  const test = [];
  useEffect(() => {
    let knightMoves = new Set();
    let row = [];
    const result = [];
    let incrementer = 1;
    let idxMap = new Map();
    for (let i = 0; i < rows; i++) {
      for (let c = 0; c < columns; c++) {
        idxMap.set(i * 8 + c, { x: i, y: c });
        row.push(square(i, c, incrementer, i * 8 + c));
        incrementer++;
      }
      test.push(row);
      result.push(<div className="board-row">{row}</div>);
      row = [];
      incrementer++;
    }

    let pawnboard = Array(64).fill(false);
    boolboard.current[9] = true;
    // pawnboard[15] = true;
    // pawnboard[14] = true;
    // let ss = new Map();
    // ss.set(15, idxMap.get(15));
    // ss.set(14, idxMap.get(14));
    // pawnList.current = ss;
    // //setpawnList(ss);
    // setpawnBoard(pawnboard);
    // realPawnBoard.current = pawnboard;
    setChessBoard(result); //change this back to r esult
    settestBoard(test);
    setboolBoard(boolboard.current);
    //setindexMap(idxMap);
    indexMap.current = idxMap;
    knightMoves = Knight(1, 1, test);
    setkm(knightMoves);
    console.log(knightMoves);
    prevind.current = 10;
    let constructedLevel = LevelConstructor(setLevel.current);
    level.current = setLevel.current;
    numPawns.current = constructedLevel.numpawns;
    lives.current = constructedLevel.lives;
    // powerUpLocations.current[0] = 1;
    // powerUpLocations.current[31] = 1;
    // powerUpLocations.current[62] = 1;
    // powerUpLocations.current[2] = 2;
    let gg = [];
    gg.push(4);
    gg.push(6);
    gg.push(2);
    gg.push(3);
    gg.push(0);
    sethotbarList(gg);
    mirrorKnightLocation.current = [-1, -1];
    levelArray.current = constructedLevel.levelPawnArray;
    levelSpeed.current = constructedLevel.spawnRate;
    // if (testBoard.length>0) {
    //   document.addEventListener("keydown", (e) => hotBarPower(e));
    // }
    const handleContextmenu = (e) => {
      e.preventDefault();
    };
    document.addEventListener("contextmenu", handleContextmenu);
    return function cleanup() {
      document.removeEventListener("contextmenu", handleContextmenu);
    };
  }, []);

  // console.log("listofstff");
  // console.log(indexMap);
  // console.log(pawnList);
  // console.log(pawnBoard);
  const [time, setTime] = useState(Date.now());

  useEffect(() => {
    console.log("1 sec");
    gameRef.current.focus();
    const interval = setInterval(() => {
      setTime(Date.now());
      powerUpTimer.current = powerUpTimer.current + 2;
      if (powerUpTimer.current >= 14) {
        PowerUpSpawner(powerUpLocations.current, boolboard, realPawnBoard);
        powerUpTimer.current = 0;
      }
      if (
        realPawnBoard.current.length > 0 &&
        pawnList.current.size > 0 &&
        !freezeTimer.current
      ) {
        let newPawnList = new Map();
        let newPawnBoard = realPawnBoard.current;
        let iteratePawnList = pawnList.current;
        let checkIfMoved = new Set();
        iteratePawnList.forEach((value, key) => {
          console.log("the pawn list map");
          console.log(value, key);
          let pawnLocationx = value.x;
          let pawnLocationy = value.y;
          if (!checkIfMoved.has(key)) newPawnBoard[key] = false;
          pawnLocationx++;
          let newkey = pawnLocationx * 8 + pawnLocationy;
          let capturesquare1;
          let capturesquare2;
          if (pawnLocationy + 1 < 8)
            capturesquare1 = pawnLocationx * 8 + pawnLocationy + 1;
          if (pawnLocationy - 1 > -1)
            capturesquare2 = pawnLocationx * 8 + pawnLocationy - 1;
          if (boolboard.current[newkey] || checkIfMoved.has(newkey)) {
            //blocked pawn
            newkey = key;
            pawnLocationx--;
          }
          if (deathFlag.current > 0) {
            deathFlag.current++;
            if (deathFlag.current > 2) {
              setDefeat(true);
            }
          }
          if (!invisTimer.current) {
            if (boolboard.current[capturesquare1]) {
              console.log("YOU'RE DEAD");
              console.log(prevind.current - 1);
              console.log(capturesquare1);
              if (prevind.current - 1 === capturesquare1) {
                setboolBoard(Array(64).fill(false));
                setkm(new Set());
                boolboard.current = Array(64).fill(false);
                deathFlag.current++;
              }
              boolboard.current[capturesquare1] = false;
              if (mirrorKnightExists.current) {
                mirrorKnightExists.current = false;
                mirrorKnightLocation.current = [-1, -1];
              }
              if (allyPawnArray.current[capturesquare1]) {
                allyPawnArray.current[capturesquare1] = false;
              }
              newkey = capturesquare1;
              checkIfMoved.add(newkey);
              capturesquare1 = 99;
            }
            if (boolboard.current[capturesquare2] && capturesquare1 !== 99) {
              console.log("YOU'RE DEAD");
              console.log(prevind.current - 1);
              console.log(capturesquare2);

              if (prevind.current - 1 === capturesquare2) {
                setboolBoard(Array(64).fill(false));
                setkm(new Set());
                boolboard.current = Array(64).fill(false);
                deathFlag.current++;
              }
              boolboard.current[capturesquare2] = false;
              if (mirrorKnightExists.current) {
                mirrorKnightExists.current = false;
                mirrorKnightLocation.current = [-1, -1];
              }
              if (allyPawnArray.current[capturesquare2]) {
                allyPawnArray.current[capturesquare2] = false;
              }

              newkey = capturesquare2;
              checkIfMoved.add(newkey);
            }
          }

          if (pawnLocationx > 7) {
            lives.current--;
            numPawns.current--;
          } else {
            newPawnBoard[newkey] = true;
            newPawnList.set(newkey, indexMap.current.get(newkey));
            checkIfMoved.add(newkey);
          }
          if (powerUpLocations.current[newkey] > 0) {
            powerUpLocations.current[newkey] = 0;
          }
        });
        realPawnBoard.current = newPawnBoard;
        pawnList.current = newPawnList;
        arePawnsDead();
        gameRef.current.focus();
      }
      if (!freezeTimer.current) pawnSpawner();
    }, levelSpeed.current);

    return () => {
      clearInterval(interval);
    };
  }, [time]);

  let xx = "iii";
  console.log(xx);
  let exarray = [];
  let disposer = [];
  let incrementer1 = 1;
  for (let i = 0; i < rows; i++) {
    //console.log("run again");

    for (let c = 0; c < columns; c++) {
      disposer.push(square(i, c, incrementer1, i * 8 + c));
      incrementer1++;
    }
    exarray.push(disposer);
    disposer = [];
    incrementer1++;
  }
  console.log(document.activeElement);
  console.log(deathFlag.current);
  return (
    <div className="board">
      <video src={backgroundVid} autoPlay loop muted id="x" />
      <div
        className="game"
        tabIndex={0}
        ref={gameRef}
        onKeyDown={(e) => {
          console.log("hi)");
          hotBarPower(e.key);
          arePawnsDead();
        }}
      >
        <div className="hotkeys">
          {hotBarSquare(1)}
          {hotBarSquare(2)}
          {hotBarSquare(3)}
          {hotBarSquare(4)}
          {hotBarSquare(5)}
        </div>

        <div
          className="rows"
          style={
            allyPawnSelected
              ? {
                  cursor: "url(" + blackpawnCursor + "),auto",
                }
              : null
          }
        >
          <div className="board-row">{exarray[0]}</div>
          <div className="board-row">{exarray[1]}</div>
          <div className="board-row">{exarray[2]}</div>
          <div className="board-row">{exarray[3]}</div>
          <div className="board-row">{exarray[4]}</div>
          <div className="board-row">{exarray[5]}</div>
          <div className="board-row">{exarray[6]}</div>
          <div className="board-row">{exarray[7]}</div>
        </div>
        <div className="stats">
          <div className="data">
            <p>Level: {level.current}</p>
            <p>Pawns Left: {numPawns.current}</p>
            <p>Lives: {lives.current}</p>
          </div>
        </div>
      </div>
      <button
        className="menuFromBoard"
        style={{ width: "200px", height: "70px" }}
        onClick={(e) => {
          setVisible(false);
          setMenuScreen(true);
        }}
      >
        Back To Menu
      </button>
    </div>
  );
}

export default Board;
