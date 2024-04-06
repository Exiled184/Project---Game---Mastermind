/*----- constants -----*/
const colors = ["red", "blue", "yellow", "green", "orange", "purple"];
const hintColors = ["grey", "white", "black"];

const board = document.querySelector(".board");

const redButton = document.querySelector("button.red");
const blueButton = document.querySelector("button.blue");
const yellowButton = document.querySelector("button.yellow");
const greenButton = document.querySelector("button.green");
const orangeButton = document.querySelector("button.orange");
const purpleButton = document.querySelector("button.purple");

let boardState = getEmptyBoardState();

let answerState = generateSecretCode(colors);
/*----- state variables -----*/
let currentRowNumber = 0;

function getEmptyBoardState() {
  return [
    { row_number: 1, choice: [], hint: [] },
    { row_number: 2, choice: [], hint: [] },
    { row_number: 3, choice: [], hint: [] },
    { row_number: 4, choice: [], hint: [] },
    { row_number: 5, choice: [], hint: [] },
    { row_number: 6, choice: [], hint: [] },
    { row_number: 7, choice: [], hint: [] },
    { row_number: 8, choice: [], hint: [] },
    { row_number: 9, choice: [], hint: [] },
    { row_number: 10, choice: [], hint: [] },
  ];
}
/*----- cached elements  -----*/

/*----- event listeners -----*/

// BUTTONS
redButton.addEventListener("click", function () {
  addColor("red");
});
blueButton.addEventListener("click", function () {
  addColor("blue");
});
yellowButton.addEventListener("click", function () {
  addColor("yellow");
});
greenButton.addEventListener("click", function () {
  addColor("green");
});
orangeButton.addEventListener("click", function () {
  addColor("orange");
});
purpleButton.addEventListener("click", function () {
  addColor("purple");
});
/*----- functions -----*/

function renderBoard(gameBoard) {
  board.innerHTML = "";

  //   HTML for rendering the guesses
  gameBoard.forEach(function (row, rowIndex) {
    const rowDiv = document.createElement("div");
    rowDiv.classList.add("row");

    const rowNumberContainer = document.createElement("div");
    const choiceContainer = document.createElement("div");
    const hintContainer = document.createElement("div");

    choiceContainer.classList.add("selection");
    hintContainer.classList.add("hint");

    const rowNumberDiv = document.createElement("div");
    rowNumberDiv.textContent = rowIndex + 1;
    rowNumberContainer.append(rowNumberDiv);

    for (let i = 0; i < 4; i++) {
      const choiceDiv = document.createElement("div");
      choiceDiv.classList.add("choice");
      const choiceColor = row.choice[i];
      if (choiceColor) {
        choiceDiv.classList.add(choiceColor);
      }
      choiceContainer.append(choiceDiv);
    }
    for (let i = 0; i < 4; i++) {
      const hintDiv = document.createElement("div");
      hintDiv.classList.add("pegs");
      const hintColor = row.hint[i];
      if (hintColor) {
        hintDiv.classList.add(hintColor);
      }
      hintContainer.append(hintDiv);
    }
    rowDiv.append(rowNumberContainer, choiceContainer, hintContainer);
    board.append(rowDiv);
  });

  // HTML for computer code
  const secretContainer = document.createElement("div");
  secretContainer.classList.add("computer-code");

  for (let i = 0; i < 4; i++) {
    const secretCodeDiv = document.createElement("div");
    secretCodeDiv.classList.add("choice");
    secretContainer.append(secretCodeDiv);
  }

  board.append(secretContainer);
}
// HTML for adding the choosing the colours
function addColor(color) {
  const rowChoiceArray = boardState[currentRowNumber].choice;
  rowChoiceArray.push(color);
  if (rowChoiceArray.length === 4) {
    boardState[currentRowNumber].hint = getHintColorArray(rowChoiceArray);
    checkResult(getHintColorArray(rowChoiceArray));
    currentRowNumber++;
  }
  renderBoard(boardState);
}
// checking the completed selection/choice and now checking that array aganist the secret code
function getHintColorArray(array) {
  let hint = [];
  array.forEach(function (color, index) {
    // black = right color, right index
    if (color === answerState[index]) {
      hint.push("black");
      return;
    }
    // white = right color in code, wrong index
    if (answerState.includes(color)) {
      hint.push("white");
      return;
    }
    // grey = wrong color
    hint.push("grey");
  });
  return hint;
}

renderBoard(boardState);

// initalisation
window.onload = function () {
  // instructions();//
  console.log("--->", answerState);
};

// initalising the game/secret code
function generateSecretCode(colors) {
  const secretColor1 = randomColor(colors);
  const secretColor2 = randomColor(colors);
  const secretColor3 = randomColor(colors);
  const secretColor4 = randomColor(colors);
  return [secretColor1, secretColor2, secretColor3, secretColor4];
}
function randomColor(colors) {
  const numberOfColors = colors.length;
  const randomColorChoice = Math.floor(Math.random() * numberOfColors);
  const generateSecretCode = colors[randomColorChoice];
  return generateSecretCode;
}

// restart button
const restartButton = document.querySelector("#originalRestart");
console.log(restartButton);
restartButton.addEventListener("click", handleRestart);

function handleRestart() {
  console.log("handleRestart");
  winScreen.style.display = "none";
  loseScreen.style.display = "none";
  answerState = generateSecretCode(colors);
  console.log(answerState);
  clearBoard();
  console.log(boardState);
}

function clearBoard() {
  boardState = getEmptyBoardState();
  currentRowNumber = 0;
  renderBoard(boardState);
}

// check winner

function checkResult(rowHintArray) {
  console.log(boardState);
  console.log(rowHintArray);
  console.log(currentRowNumber);
  if (
    rowHintArray.length === 4 &&
    rowHintArray[0] === "black" &&
    rowHintArray[1] === "black" &&
    rowHintArray[2] === "black" &&
    rowHintArray[3] === "black"
  ) {
    // alert("You win!");
    winScreen.style.display = "block";
    const win = document.getElementById("win");
    console.log(win);
    win.addEventListener("click", handleRestart);
    clearBoard();
    return;
  } else if (
    rowHintArray.length === 4 &&
    (rowHintArray[0] !== "black" ||
      rowHintArray[1] !== "black" ||
      rowHintArray[2] !== "black" ||
      rowHintArray[3] !== "black") &&
    currentRowNumber === 9
  ) {
    loseScreen.style.display = "block";
    const loss = document.getElementById("loss");
    loss.addEventListener("click", handleRestart);
    clearBoard();
  }
}

function endGame() {
  gameOver;
}

const btn = document.getElementById("instruction");
const span = document.getElementsByClassName("close")[0];
const modal = document.getElementById("helpMe");
const winScreen = document.getElementById("winScreen");
const loseScreen = document.getElementById("loseScreen");

// Open the modal
btn.onclick = function () {
  modal.style.display = "block";
};

// Close the modal
span.onclick = function () {
  modal.style.display = "none";
};
