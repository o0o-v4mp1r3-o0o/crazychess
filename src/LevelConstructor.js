function LevelConstructor(levelNum) {
  let levelPawnArray = [];
  let numpawns = 0;
  let spawnRate = 0;
  let lives = 10;

  function pawnCounter() {
    numpawns = 0;
    for (let i = 0; i < levelPawnArray.length; i++) {
      for (let c = 0; c < levelPawnArray[i].length; c++) {
        if (levelPawnArray[i][c] > 0) {
          numpawns++;
        }
      }
    }
  }

  function spaceInserter() {
    for (let i = 0; i < levelPawnArray.length; i += 2) {
      levelPawnArray.splice(i + 1, 0, [0]);
    }
  }

  function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
  }

  function generateRows(numRows, numPawns) {
    for (let i = 0; i < numRows; i++) {
      levelPawnArray.push(r(numPawns));
    }
  }

  function pawnInserter(...args) {
    let insertedArray = [];
    let argsCounter = 0;
    for (let i = 0; i < args.length; i += 2) {
      let numRows = args[i];
      while (numRows > 0) {
        insertedArray.push(r(args[i + 1]));
        numRows--;
      }
    }
    shuffleArray(insertedArray);
    for (let i = 0; i < levelPawnArray.length; i += 2) {
      if (insertedArray.length > argsCounter) {
        levelPawnArray.splice(i + 1, 0, insertedArray[argsCounter]);
      } else {
        levelPawnArray.splice(i + 1, 0, [0]);
      }
      argsCounter++;
    }
  }

  function r(num) {
    let diceRoll = [1, 2, 3, 4, 5, 6, 7, 8];
    let newArray = [];
    for (let i = 0; i < num; i++) {
      let newnum = Math.floor(Math.random() * diceRoll.length);
      newArray.push(diceRoll[newnum]);
      diceRoll.splice(newnum, 1);
    }
    return newArray;
  }
  function level0() {
    levelPawnArray.push([4]);
    spawnRate = 2000;
    pawnCounter();
  }
  function level1() {
    levelPawnArray.push([8]);
    levelPawnArray.push([7]);
    levelPawnArray.push([8]);
    levelPawnArray.push([4]);
    levelPawnArray.push([3]);
    spawnRate = 2000;
    pawnCounter();
    spaceInserter();
  }
  function level2() {
    levelPawnArray.push([6, 8]);
    levelPawnArray.push([2]);
    levelPawnArray.push([6]);
    levelPawnArray.push([7]);
    levelPawnArray.push([4]);
    levelPawnArray.push([3]);
    levelPawnArray.push([1]);
    spawnRate = 2000;
    pawnCounter();
    spaceInserter();
  }
  function level3() {
    levelPawnArray.push([1, 3]);
    levelPawnArray.push([3]);
    levelPawnArray.push([5]);
    levelPawnArray.push([7]);
    levelPawnArray.push([2]);
    levelPawnArray.push([1]);
    levelPawnArray.push([3]);
    levelPawnArray.push([1, 5]);
    levelPawnArray.push([7]);
    levelPawnArray.push([2]);
    spawnRate = 2000;
    pawnCounter();
    spaceInserter();
  }
  function level4() {
    generateRows(11, 1);
    generateRows(1, 2);
    shuffleArray(levelPawnArray);
    spawnRate = 2000;
    pawnCounter();
    spaceInserter();
  }
  function level5() {
    generateRows(12, 1);
    generateRows(4, 2);
    shuffleArray(levelPawnArray);
    spawnRate = 2000;
    pawnCounter();
    spaceInserter();
  }
  function level6() {
    generateRows(8, 1);
    generateRows(5, 2);
    shuffleArray(levelPawnArray);
    spawnRate = 2000;
    pawnCounter();
    spaceInserter();
  }
  function level7() {
    generateRows(8, 1);
    generateRows(8, 2);
    shuffleArray(levelPawnArray);
    spawnRate = 2000;
    pawnCounter();
    spaceInserter();
  }
  function level8() {
    generateRows(10, 1);
    generateRows(10, 2);
    shuffleArray(levelPawnArray);
    spawnRate = 2000;
    pawnCounter();
    spaceInserter();
  }
  function level9() {
    generateRows(11, 1);
    generateRows(11, 2);
    shuffleArray(levelPawnArray);
    spawnRate = 2000;
    pawnCounter();
    spaceInserter();
  }
  function level10() {
    generateRows(12, 1);
    generateRows(12, 2);
    shuffleArray(levelPawnArray);
    spawnRate = 2000;
    pawnCounter();
    spaceInserter();
  }
  function level11() {
    generateRows(13, 1);
    generateRows(13, 2);
    shuffleArray(levelPawnArray);
    spawnRate = 2000;
    pawnCounter();
    spaceInserter();
  }
  function level12() {
    generateRows(14, 1);
    generateRows(14, 2);
    shuffleArray(levelPawnArray);
    spawnRate = 2000;
    pawnCounter();
    spaceInserter();
  }
  function level13() {
    generateRows(15, 1);
    generateRows(15, 2);
    shuffleArray(levelPawnArray);
    spawnRate = 2000;
    pawnCounter();
    spaceInserter();
  }
  function level14() {
    generateRows(16, 1);
    generateRows(16, 2);
    shuffleArray(levelPawnArray);
    spawnRate = 2000;
    pawnCounter();
    spaceInserter();
  }
  function level15() {
    generateRows(17, 1);
    generateRows(17, 2);
    shuffleArray(levelPawnArray);
    spawnRate = 2000;
    pawnCounter();
    spaceInserter();
  }
  function level16() {
    generateRows(18, 1);
    generateRows(18, 2);
    shuffleArray(levelPawnArray);
    spawnRate = 2000;
    pawnCounter();
    spaceInserter();
  }
  function level17() {
    generateRows(19, 1);
    generateRows(19, 2);
    shuffleArray(levelPawnArray);
    spawnRate = 2000;
    pawnCounter();
    spaceInserter();
  }
  function level18() {
    generateRows(20, 1);
    generateRows(20, 2);
    shuffleArray(levelPawnArray);
    spawnRate = 2000;
    pawnCounter();
    spaceInserter();
  }
  function level19() {
    generateRows(21, 1);
    generateRows(21, 2);
    shuffleArray(levelPawnArray);
    spawnRate = 2000;
    pawnCounter();
    spaceInserter();
  }
  function level20() {
    generateRows(22, 1);
    generateRows(22, 2);
    shuffleArray(levelPawnArray);
    spawnRate = 2000;
    pawnCounter();
    spaceInserter();
  }
  function level21() {
    generateRows(10, 1);
    generateRows(10, 2);
    shuffleArray(levelPawnArray);
    spawnRate = 1800;
    pawnCounter();
    spaceInserter();
  }
  function level22() {
    generateRows(9, 1);
    generateRows(10, 2);
    generateRows(2, 3);
    shuffleArray(levelPawnArray);
    spawnRate = 1800;
    pawnCounter();
    spaceInserter();
  }
  function level23() {
    generateRows(6, 1);
    generateRows(11, 2);
    generateRows(3, 3);
    shuffleArray(levelPawnArray);
    spawnRate = 1800;
    pawnCounter();
    spaceInserter();
  }
  function level24() {
    generateRows(6, 1);
    generateRows(13, 2);
    generateRows(4, 3);
    shuffleArray(levelPawnArray);
    spawnRate = 1800;
    pawnCounter();
    spaceInserter();
  }
  function level25() {
    generateRows(8, 1);
    generateRows(14, 2);
    generateRows(4, 3);
    shuffleArray(levelPawnArray);
    spawnRate = 1800;
    pawnCounter();
    spaceInserter();
  }
  function level26() {
    generateRows(5, 1);
    generateRows(15, 2);
    generateRows(5, 3);
    shuffleArray(levelPawnArray);
    spawnRate = 1800;
    pawnCounter();
    spaceInserter();
  }
  function level27() {
    generateRows(5, 1);
    generateRows(16, 2);
    generateRows(6, 3);
    shuffleArray(levelPawnArray);
    spawnRate = 1800;
    pawnCounter();
    spaceInserter();
  }
  function level28() {
    generateRows(5, 1);
    generateRows(17, 2);
    generateRows(7, 3);
    shuffleArray(levelPawnArray);
    spawnRate = 1800;
    pawnCounter();
    spaceInserter();
  }
  function level29() {
    generateRows(5, 1);
    generateRows(18, 2);
    generateRows(8, 3);
    shuffleArray(levelPawnArray);
    spawnRate = 1800;
    pawnCounter();
    spaceInserter();
  }
  function level30() {
    generateRows(7, 1);
    generateRows(19, 2);
    generateRows(8, 3);
    shuffleArray(levelPawnArray);
    spawnRate = 1800;
    pawnCounter();
    spaceInserter();
  }
  function level31() {
    generateRows(7, 1);
    generateRows(20, 2);
    generateRows(9, 3);
    shuffleArray(levelPawnArray);
    spawnRate = 1800;
    pawnCounter();
    spaceInserter();
  }
  function level32() {
    generateRows(10, 1);
    generateRows(22, 2);
    generateRows(9, 3);
    shuffleArray(levelPawnArray);
    spawnRate = 1800;
    pawnCounter();
    spaceInserter();
  }
  function level33() {
    generateRows(12, 1);
    generateRows(23, 2);
    generateRows(10, 3);
    shuffleArray(levelPawnArray);
    spawnRate = 1800;
    pawnCounter();
    spaceInserter();
  }
  function level34() {
    generateRows(14, 1);
    generateRows(24, 2);
    generateRows(11, 3);
    shuffleArray(levelPawnArray);
    spawnRate = 1800;
    pawnCounter();
    spaceInserter();
  }
  function level35() {
    generateRows(16, 1);
    generateRows(25, 2);
    generateRows(11, 3);
    shuffleArray(levelPawnArray);
    spawnRate = 1800;
    pawnCounter();
    spaceInserter();
  }
  function level36() {
    generateRows(17, 1);
    generateRows(25, 2);
    generateRows(11, 3);
    generateRows(1, 4);
    shuffleArray(levelPawnArray);
    spawnRate = 1800;
    pawnCounter();
    spaceInserter();
  }
  function level37() {
    generateRows(19, 1);
    generateRows(25, 2);
    generateRows(12, 3);
    generateRows(1, 4);
    shuffleArray(levelPawnArray);
    spawnRate = 1800;
    pawnCounter();
    spaceInserter();
  }
  function level38() {
    generateRows(21, 1);
    generateRows(25, 2);
    generateRows(13, 3);
    generateRows(1, 4);
    shuffleArray(levelPawnArray);
    spawnRate = 1800;
    pawnCounter();
    spaceInserter();
  }
  function level39() {
    generateRows(21, 1);
    generateRows(25, 2);
    generateRows(14, 3);
    generateRows(2, 4);
    shuffleArray(levelPawnArray);
    spawnRate = 1800;
    pawnCounter();
    spaceInserter();
  }
  function level40() {
    generateRows(21, 1);
    generateRows(25, 2);
    generateRows(17, 3);
    generateRows(3, 4);
    shuffleArray(levelPawnArray);
    spawnRate = 1800;
    pawnCounter();
    spaceInserter();
  }
  function level41() {
    generateRows(2, 1);
    generateRows(5, 2);
    generateRows(4, 3);
    generateRows(3, 4);
    shuffleArray(levelPawnArray);
    pawnInserter(9, 0, 2, 1);
    spawnRate = 1500;
    pawnCounter();
  }
  function level42() {
    generateRows(10, 1);
    generateRows(6, 2);
    generateRows(3, 3);
    generateRows(1, 4);
    shuffleArray(levelPawnArray);
    pawnInserter(15, 0, 4, 1);
    spawnRate = 1500;
    pawnCounter();
  }
  function level43() {
    generateRows(12, 1);
    generateRows(10, 2);
    generateRows(5, 3);
    generateRows(3, 4);
    shuffleArray(levelPawnArray);
    pawnInserter(14, 0, 10, 1);
    spawnRate = 1500;
    pawnCounter();
  }
  function level44() {
    generateRows(10, 1);
    generateRows(15, 2);
    generateRows(7, 3);
    generateRows(3, 4);
    shuffleArray(levelPawnArray);
    pawnInserter(21, 0, 13, 1);
    spawnRate = 1500;
    pawnCounter();
  }
  function level45() {
    generateRows(15, 1);
    generateRows(12, 2);
    generateRows(9, 3);
    generateRows(4, 4);
    shuffleArray(levelPawnArray);
    pawnInserter(24, 0, 15, 1, 1, 2);
    spawnRate = 1500;
    pawnCounter();
  }
  function level46() {
    generateRows(15, 1);
    generateRows(20, 2);
    generateRows(11, 3);
    generateRows(4, 4);
    shuffleArray(levelPawnArray);
    pawnInserter(24, 0, 25, 1, 1, 2);
    spawnRate = 1500;
    pawnCounter();
  }
  function level47() {
    generateRows(15, 1);
    generateRows(20, 2);
    generateRows(21, 3);
    generateRows(4, 4);
    shuffleArray(levelPawnArray);
    pawnInserter(20, 0, 39, 1, 1, 2);
    spawnRate = 1500;
    pawnCounter();
  }
  function level48() {
    generateRows(15, 1);
    generateRows(25, 2);
    generateRows(21, 3);
    generateRows(9, 4);
    shuffleArray(levelPawnArray);
    pawnInserter(20, 0, 49, 1, 1, 2);
    spawnRate = 1500;
    pawnCounter();
  }
  function level49() {
    generateRows(15, 1);
    generateRows(30, 2);
    generateRows(26, 3);
    generateRows(9, 4);
    shuffleArray(levelPawnArray);
    pawnInserter(20, 0, 59, 1, 1, 2);
    spawnRate = 1500;
    pawnCounter();
  }
  function level50() {
    generateRows(10, 1);
    generateRows(38, 2);
    generateRows(30, 3);
    generateRows(12, 4);
    shuffleArray(levelPawnArray);
    pawnInserter(20, 0, 59, 1, 1, 2);
    spawnRate = 1500;
    pawnCounter();
  }
  function level51() {
    generateRows(10, 1);
    generateRows(45, 2);
    generateRows(33, 3);
    generateRows(12, 4);
    shuffleArray(levelPawnArray);
    pawnInserter(30, 0, 58, 1, 2, 2);
    spawnRate = 1500;
    pawnCounter();
  }
  function level52() {
    generateRows(10, 1);
    generateRows(55, 2);
    generateRows(33, 3);
    generateRows(12, 4);
    shuffleArray(levelPawnArray);
    pawnInserter(30, 0, 68, 1, 2, 2);
    spawnRate = 1500;
    pawnCounter();
  }
  function level53() {
    generateRows(10, 1);
    generateRows(60, 2);
    generateRows(38, 3);
    generateRows(12, 4);
    shuffleArray(levelPawnArray);
    pawnInserter(30, 0, 68, 1, 2, 2);
    spawnRate = 1500;
    pawnCounter();
  }
  function level54() {
    generateRows(10, 1);
    generateRows(60, 2);
    generateRows(43, 3);
    generateRows(17, 4);
    shuffleArray(levelPawnArray);
    pawnInserter(30, 0, 70, 1, 5, 2);
    spawnRate = 1500;
    pawnCounter();
  }
  function level55() {
    generateRows(10, 1);
    generateRows(65, 2);
    generateRows(45, 3);
    generateRows(20, 4);
    shuffleArray(levelPawnArray);
    pawnInserter(35, 0, 75, 1, 5, 2);
    spawnRate = 1500;
    pawnCounter();
  }
  function level56() {
    generateRows(20, 1);
    generateRows(65, 2);
    generateRows(45, 3);
    generateRows(20, 4);
    shuffleArray(levelPawnArray);
    pawnInserter(45, 0, 75, 1, 5, 2);
    spawnRate = 1500;
    pawnCounter();
  }
  function level57() {
    generateRows(20, 1);
    generateRows(75, 2);
    generateRows(45, 3);
    generateRows(20, 4);
    shuffleArray(levelPawnArray);
    pawnInserter(45, 0, 85, 1, 5, 2);
    spawnRate = 1500;
    pawnCounter();
  }
  function level58() {
    generateRows(30, 1);
    generateRows(75, 2);
    generateRows(45, 3);
    generateRows(20, 4);
    shuffleArray(levelPawnArray);
    pawnInserter(45, 0, 85, 1, 15, 2);
    spawnRate = 1500;
    pawnCounter();
  }
  function level59() {
    generateRows(40, 1);
    generateRows(75, 2);
    generateRows(45, 3);
    generateRows(20, 4);
    shuffleArray(levelPawnArray);
    pawnInserter(45, 0, 85, 1, 25, 2);
    spawnRate = 1500;
    pawnCounter();
  }
  function level60() {
    generateRows(45, 1);
    generateRows(75, 2);
    generateRows(45, 3);
    generateRows(20, 4);
    shuffleArray(levelPawnArray);
    pawnInserter(45, 0, 85, 1, 30, 2);
    spawnRate = 1500;
    pawnCounter();
  }
  function level61() {
    generateRows(5, 1);
    generateRows(10, 2);
    generateRows(15, 3);
    generateRows(5, 4);
    shuffleArray(levelPawnArray);
    pawnInserter(20, 0, 13, 1, 1, 2);
    spawnRate = 1300;
    pawnCounter();
  }
  function level62() {
    generateRows(15, 1);
    generateRows(10, 2);
    generateRows(15, 3);
    generateRows(5, 4);
    shuffleArray(levelPawnArray);
    pawnInserter(20, 0, 18, 1, 6, 2);
    spawnRate = 1300;
    pawnCounter();
  }
  function level63() {
    generateRows(15, 1);
    generateRows(15, 2);
    generateRows(15, 3);
    generateRows(5, 4);
    shuffleArray(levelPawnArray);
    pawnInserter(20, 0, 23, 1, 6, 2);
    spawnRate = 1300;
    pawnCounter();
  }
  function level64() {
    generateRows(15, 1);
    generateRows(20, 2);
    generateRows(15, 3);
    generateRows(5, 4);
    shuffleArray(levelPawnArray);
    pawnInserter(25, 0, 23, 1, 6, 2);
    spawnRate = 1300;
    pawnCounter();
  }
  function level65() {
    generateRows(20, 1);
    generateRows(20, 2);
    generateRows(15, 3);
    generateRows(5, 4);
    shuffleArray(levelPawnArray);
    pawnInserter(25, 0, 28, 1, 6, 2);
    spawnRate = 1300;
    pawnCounter();
  }
  function level66() {
    generateRows(20, 1);
    generateRows(20, 2);
    generateRows(20, 3);
    generateRows(5, 4);
    shuffleArray(levelPawnArray);
    pawnInserter(25, 0, 33, 1, 6, 2);
    spawnRate = 1300;
    pawnCounter();
  }
  function level67() {
    generateRows(20, 1);
    generateRows(20, 2);
    generateRows(22, 3);
    generateRows(5, 4);
    shuffleArray(levelPawnArray);
    pawnInserter(27, 0, 33, 1, 6, 2);
    spawnRate = 1300;
    pawnCounter();
  }
  function level68() {
    generateRows(20, 1);
    generateRows(20, 2);
    generateRows(22, 3);
    generateRows(6, 4);
    shuffleArray(levelPawnArray);
    pawnInserter(27, 0, 33, 1, 7, 2);
    spawnRate = 1300;
    pawnCounter();
  }
  function level69() {
    generateRows(26, 1);
    generateRows(20, 2);
    generateRows(22, 3);
    generateRows(6, 4);
    shuffleArray(levelPawnArray);
    pawnInserter(27, 0, 38, 1, 7, 2, 1, 3);
    spawnRate = 1300;
    pawnCounter();
  }
  function level70() {
    generateRows(26, 1);
    generateRows(20, 2);
    generateRows(22, 3);
    generateRows(8, 4);
    shuffleArray(levelPawnArray);
    pawnInserter(27, 0, 40, 1, 7, 2, 1, 3);
    spawnRate = 1300;
    pawnCounter();
  }
  function level71() {
    generateRows(27, 1);
    generateRows(20, 2);
    generateRows(22, 3);
    generateRows(8, 4);
    shuffleArray(levelPawnArray);
    pawnInserter(27, 0, 40, 1, 7, 2, 1, 3, 1, 4);
    spawnRate = 1300;
    pawnCounter();
  }
  function level72() {
    generateRows(37, 1);
    generateRows(20, 2);
    generateRows(22, 3);
    generateRows(8, 4);
    shuffleArray(levelPawnArray);
    pawnInserter(37, 0, 50, 1, 7, 2, 1, 3, 1, 4);
    spawnRate = 1300;
    pawnCounter();
  }
  function level73() {
    generateRows(42, 1);
    generateRows(25, 2);
    generateRows(22, 3);
    generateRows(8, 4);
    shuffleArray(levelPawnArray);
    pawnInserter(47, 0, 50, 1, 7, 2, 1, 3, 1, 4);
    spawnRate = 1300;
    pawnCounter();
  }
  function level74() {
    generateRows(42, 1);
    generateRows(35, 2);
    generateRows(22, 3);
    generateRows(10, 4);
    shuffleArray(levelPawnArray);
    pawnInserter(47, 0, 60, 1, 7, 2, 1, 3, 1, 4);
    spawnRate = 1300;
    pawnCounter();
  }
  function level75() {
    generateRows(42, 1);
    generateRows(35, 2);
    generateRows(25, 3);
    generateRows(12, 4);
    shuffleArray(levelPawnArray);
    pawnInserter(52, 0, 60, 1, 7, 2, 1, 3, 1, 4);
    spawnRate = 1300;
    pawnCounter();
  }
  function level76() {
    generateRows(42, 1);
    generateRows(37, 2);
    generateRows(26, 3);
    generateRows(14, 4);
    shuffleArray(levelPawnArray);
    pawnInserter(52, 0, 65, 1, 7, 2, 1, 3, 1, 4);
    spawnRate = 1300;
    pawnCounter();
  }
  function level77() {
    generateRows(47, 1);
    generateRows(37, 2);
    generateRows(26, 3);
    generateRows(14, 4);
    shuffleArray(levelPawnArray);
    pawnInserter(52, 0, 66, 1, 10, 2, 1, 3, 1, 4, 1, 5);
    spawnRate = 1300;
    pawnCounter();
  }
  function level78() {
    generateRows(47, 1);
    generateRows(40, 2);
    generateRows(29, 3);
    generateRows(17, 4);
    shuffleArray(levelPawnArray);
    pawnInserter(52, 0, 70, 1, 15, 2, 1, 3, 1, 4, 1, 5);
    spawnRate = 1300;
    pawnCounter();
  }
  function level79() {
    generateRows(57, 1);
    generateRows(50, 2);
    generateRows(29, 3);
    generateRows(17, 4);
    shuffleArray(levelPawnArray);
    pawnInserter(62, 0, 70, 1, 20, 2, 6, 3, 1, 4, 1, 5);
    spawnRate = 1300;
    pawnCounter();
  }
  function level80() {
    generateRows(57, 1);
    generateRows(50, 2);
    generateRows(31, 3);
    generateRows(20, 4);
    shuffleArray(levelPawnArray);
    pawnInserter(62, 0, 70, 1, 20, 2, 6, 3, 16, 4, 11, 5);
    spawnRate = 1300;
    pawnCounter();
  }

  if (levelNum === 0) {
    level0();
  } else if (levelNum === 1) {
    level1();
  } else if (levelNum === 2) {
    level2();
  } else if (levelNum === 3) {
    level3();
  } else if (levelNum === 4) {
    level4();
  } else if (levelNum === 5) {
    level5();
  } else if (levelNum === 6) {
    level6();
  } else if (levelNum === 7) {
    level7();
  } else if (levelNum === 8) {
    level8();
  } else if (levelNum === 9) {
    level9();
  } else if (levelNum === 10) {
    level10();
  } else if (levelNum === 11) {
    level11();
  } else if (levelNum === 12) {
    level12();
  } else if (levelNum === 13) {
    level13();
  } else if (levelNum === 14) {
    level14();
  } else if (levelNum === 15) {
    level15();
  } else if (levelNum === 16) {
    level16();
  } else if (levelNum === 17) {
    level17();
  } else if (levelNum === 18) {
    level18();
  } else if (levelNum === 19) {
    level19();
  } else if (levelNum === 20) {
    level20();
  } else if (levelNum === 21) {
    level21();
  } else if (levelNum === 22) {
    level22();
  } else if (levelNum === 23) {
    level23();
  } else if (levelNum === 24) {
    level24();
  } else if (levelNum === 25) {
    level25();
  } else if (levelNum === 26) {
    level26();
  } else if (levelNum === 27) {
    level27();
  } else if (levelNum === 28) {
    level28();
  } else if (levelNum === 29) {
    level29();
  } else if (levelNum === 30) {
    level30();
  } else if (levelNum === 31) {
    level31();
  } else if (levelNum === 32) {
    level32();
  } else if (levelNum === 33) {
    level33();
  } else if (levelNum === 34) {
    level34();
  } else if (levelNum === 35) {
    level35();
  } else if (levelNum === 36) {
    level36();
  } else if (levelNum === 37) {
    level37();
  } else if (levelNum === 38) {
    level38();
  } else if (levelNum === 39) {
    level39();
  } else if (levelNum === 40) {
    level40();
  } else if (levelNum === 41) {
    level41();
  } else if (levelNum === 42) {
    level42();
  } else if (levelNum === 43) {
    level43();
  } else if (levelNum === 44) {
    level44();
  } else if (levelNum === 45) {
    level45();
  } else if (levelNum === 46) {
    level46();
  } else if (levelNum === 47) {
    level47();
  } else if (levelNum === 48) {
    level48();
  } else if (levelNum === 49) {
    level49();
  } else if (levelNum === 50) {
    level50();
  } else if (levelNum === 51) {
    level51();
  } else if (levelNum === 52) {
    level52();
  } else if (levelNum === 53) {
    level53();
  } else if (levelNum === 54) {
    level54();
  } else if (levelNum === 55) {
    level55();
  } else if (levelNum === 56) {
    level56();
  } else if (levelNum === 57) {
    level57();
  } else if (levelNum === 58) {
    level58();
  } else if (levelNum === 59) {
    level59();
  } else if (levelNum === 60) {
    level60();
  } else if (levelNum === 61) {
    level61();
  } else if (levelNum === 62) {
    level62();
  } else if (levelNum === 63) {
    level63();
  } else if (levelNum === 64) {
    level64();
  } else if (levelNum === 65) {
    level65();
  } else if (levelNum === 66) {
    level66();
  } else if (levelNum === 67) {
    level67();
  } else if (levelNum === 68) {
    level68();
  } else if (levelNum === 69) {
    level69();
  } else if (levelNum === 70) {
    level70();
  } else if (levelNum === 71) {
    level71();
  } else if (levelNum === 72) {
    level72();
  } else if (levelNum === 73) {
    level73();
  } else if (levelNum === 74) {
    level74();
  } else if (levelNum === 75) {
    level75();
  } else if (levelNum === 76) {
    level76();
  } else if (levelNum === 77) {
    level77();
  } else if (levelNum === 78) {
    level78();
  } else if (levelNum === 79) {
    level79();
  } else if (levelNum === 80) {
    level80();
  } else {
    level80();
  }

  if (levelNum < 21) {
    lives = 10;
  } else if (levelNum > 20 && levelNum < 41) {
    lives = 20;
  } else if (levelNum > 40 && levelNum < 61) {
    lives = 40;
  } else {
    lives = 50;
  }

  return { levelPawnArray, numpawns, spawnRate, lives };
}

export default LevelConstructor;
