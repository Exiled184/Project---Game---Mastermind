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

const boardState = [
  { row_number: 1, choice: ["", "", "", ""], hint: ["", "", "", ""] },
  { row_number: 2, choice: ["", "", "", ""], hint: ["", "", "", ""] },
  { row_number: 3, choice: ["", "", "", ""], hint: ["", "", "", ""] },
  { row_number: 4, choice: ["", "", "", ""], hint: ["", "", "", ""] },
  { row_number: 5, choice: ["", "", "", ""], hint: ["", "", "", ""] },
  { row_number: 6, choice: ["", "", "", ""], hint: ["", "", "", ""] },
  { row_number: 7, choice: ["", "", "", ""], hint: ["", "", "", ""] },
  { row_number: 8, choice: ["", "", "", ""], hint: ["", "", "", ""] },
  { row_number: 9, choice: ["", "", "", ""], hint: ["", "", "", ""] },
  { row_number: 10, choice: ["", "", "", ""], hint: ["", "", "", ""] },
  { computerCode: ["", "", "", ""] },
];
/*----- state variables -----*/
let secretCode = generateSecretCode(colors);
let selectionChoiceRow1 = [];
let selectionChoiceRow2 = [];
let selectionChoiceRow3 = [];
let selectionChoiceRow4 = [];
let selectionChoiceRow5 = [];
let selectionChoiceRow6 = [];
let selectionChoiceRow7 = [];
let selectionChoiceRow8 = [];
let selectionChoiceRow9 = [];
let selectionChoiceRow10 = [];
let hintRow1 = [];
let hintRow2 = [];
let hintRow3 = [];
let hintRow4 = [];
let hintRow5 = [];
let hintRow6 = [];
let hintRow7 = [];
let hintRow8 = [];
let hintRow9 = [];
let hintRow10 = [];
/*----- cached elements  -----*/

/*----- event listeners -----*/

/*----- functions -----*/

function renderBoard(gameBoard) {
  board.innerHTML = "";
  gameBoard.forEach(function (row) {
    const rowDiv = document.createElement("div");
    rowDiv.classList.add("row");

    const rowNumberContainer = document.createElement("div");
    const choiceContainer = document.createElement("div");
    const hintContainer = document.createElement("div");
    const computerCodeContainer = document.createElement("div");

    choiceContainer.classList.add("selection");
    hintContainer.classList.add("hint");
    computerCodeContainer.classList.add("computer-code");

    const rowNumberDiv = document.createElement("div");
    rowNumberDiv.textContent = row.row_number;
    rowNumberContainer.append(rowNumberDiv);

    const computerCodeDiv = document.createElement("div");
    computerCodeDiv.classList.add("computer-code");
    computerCodeContainer.append(computerCodeDiv);

    for (let i = 0; i < 4; i++) {
      const choiceDiv = document.createElement("div");
      choiceDiv.classList.add("choice");
      choiceContainer.append(choiceDiv);
    }

    for (let i = 0; i < 4; i++) {
      const hintDiv = document.createElement("div");
      hintDiv.classList.add("pegs");
      hintContainer.append(hintDiv);
    }

    rowDiv.append(
      computerCodeContainer,
      rowNumberContainer,
      choiceContainer,
      hintContainer
    );
    board.append(rowDiv);
  });
}

function addColor(color) {
  for (const row of boardState) {
    for (let i = 0; i < row.guess.length; i++) {
      if (row.guess[i] === "") {
        row.guess[i] = color;
        renderBoard(boardState);
        return;
      }
    }
  }
}

renderBoard(boardState);

redButton.addEventListener("click", function () {
  addColor(".red");
});
blueButton.addEventListener("click", function () {
  addColor(".blue");
});
yellowButton.addEventListener("click", function () {
  addColor(".yellow");
});
greenButton.addEventListener("click", function () {
  addColor(".green");
});
orangeButton.addEventListener("click", function () {
  addColor(".orange");
});
purpleButton.addEventListener("click", function () {
  addColor(".purple");
});

// initalisation
window.onload = function () {
  // instructions();//
  // startGame()
  console.log("--->", secretCode);
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
document.querySelector(".restart").addEventListener("click", handleRestart);

function handleRestart() {
  secretCode = generateSecretCode(colors);
  console.log(secretCode);
}

// instruction button
// document.querySelector(".instructions").addEventListener("click",handleInstructions);

// function handleInstructions(){
// 	let instruction = document.getElement
// }

// clicking the colour buttons returns the colour
const buttonSelector = document.querySelectorAll(".color-buttons button");

buttonSelector.forEach(function (button) {
  button.addEventListener("click", function () {
    selectColor(button.id);
  });
});

// clicking the color buttons fills the arrays

// function selectColor(color) {
//   if (selectionChoiceRow1.length < 4) {
//     selectionChoiceRow1.push(color);
//     const currentTile = document.querySelector(
//       "#guess-" + selectionChoiceRow1.length
//     );
//     currentTile.classList.add(color);
//     console.log("____>", "#guess-" + selectionChoiceRow1.length);
//   } else if (selectionChoiceRow2.length < 4) {
//     selectionChoiceRow2.push(color);
//     const currentTile = document.querySelector(
//       "#guess-" + (4 + selectionChoiceRow2.length)
//     );
//     currentTile.classList.add(color);
//   } else if (selectionChoiceRow3.length < 4) {
//     selectionChoiceRow3.push(color);
//     const currentTile = document.querySelector(
//       "#guess-" + (8 + selectionChoiceRow3.length)
//     );
//     currentTile.classList.add(color);
//   } else if (selectionChoiceRow4.length < 4) {
//     selectionChoiceRow4.push(color);
//     const currentTile = document.querySelector(
//       "#guess-" + (12 + selectionChoiceRow4.length)
//     );
//     currentTile.classList.add(color);
//   } else if (selectionChoiceRow5.length < 4) {
//     selectionChoiceRow5.push(color);
//     const currentTile = document.querySelector(
//       "#guess-" + (16 + selectionChoiceRow5.length)
//     );
//     currentTile.classList.add(color);
//   } else if (selectionChoiceRow6.length < 4) {
//     selectionChoiceRow6.push(color);
//     const currentTile = document.querySelector(
//       "#guess-" + (20 + selectionChoiceRow6.length)
//     );
//     currentTile.classList.add(color);
//   } else if (selectionChoiceRow7.length < 4) {
//     selectionChoiceRow7.push(color);
//     const currentTile = document.querySelector(
//       "#guess-" + (24 + selectionChoiceRow7.length)
//     );
//     currentTile.classList.add(color);
//   } else if (selectionChoiceRow8.length < 4) {
//     selectionChoiceRow8.push(color);
//     const currentTile = document.querySelector(
//       "#guess-" + (28 + selectionChoiceRow8.length)
//     );
//     currentTile.classList.add(color);
//   } else if (selectionChoiceRow9.length < 4) {
//     selectionChoiceRow9.push(color);
//     const currentTile = document.querySelector(
//       "#guess-" + (32 + selectionChoiceRow9.length)
//     );
//     currentTile.classList.add(color);
//   } else if (selectionChoiceRow10.length < 4) {
//     selectionChoiceRow10.push(color);
//     const currentTile = document.querySelector(
//       "#guess-" + (36 + selectionChoiceRow10.length)
//     );
//     currentTile.classList.add(color);
//   }
//   if (selectionChoiceRow1.length === 4) {
//     hints(hintColors);
//   }
//   if (selectionChoiceRow2.length === 4) {
//     hints(hintColors);
//   }
//   if (selectionChoiceRow3.length === 4) {
//     hints(hintColors);
//   }
//   if (selectionChoiceRow4.length === 4) {
//     hints(hintColors);
//   }
//   if (selectionChoiceRow5.length === 4) {
//     hints(hintColors);
//   }
//   if (selectionChoiceRow6.length === 4) {
//     hints(hintColors);
//   }
//   if (selectionChoiceRow7.length === 4) {
//     hints(hintColors);
//   }
//   if (selectionChoiceRow8.length === 4) {
//     hints(hintColors);
//   }
//   if (selectionChoiceRow9.length === 4) {
//     hints(hintColors);
//   }
//   if (selectionChoiceRow10.length === 4) {
//     hints(hintColors);
//   }
// }

// check hints
// split up functions varible that looked for event, in the function - what was clicked - put a colour on the board, when four colours on the board
// 3 call back functions should be issues, check sequence, check color, check result
// change variable

// const spots = document.querySelector("#hint-");

// const hints = function (event) {
//   if (spots === 4) {
//     checkSequence();
//     checkColor();
//     checkResult();
//   }
// };

// function checkColor(hintColors) {
//   if (spots.styles.backgroundColor === secretCode.styles.backgroundColor) {
//     hintRow1.push(hintColors);
//   }
// }

// function checkSequence() {
// 	boardPosition[indexCounter].map(function(row1,index){
// if(row1.style.backgroundColor === secretCode[index]){
// 	resultSpot[indexCounter][index].style.backgroundColor;
// }
// 	})
// }

// function hints() {
//   if (selectionChoiceRow1.length === 4) {
//     for (let i = 1; i <= selectionChoiceRow1.length; i++) {
//       const currentHint = document.getElementById("hint-" + i);
//       console.log(
//         getComputedStyle(currentHint).backgroundColor,
//         "current Hint"
//       );
//       if ("guess-" + i === secretCode) {
//         // console.log(currentHint, "--1--> current Hint");
//         // console.log(secretCode, "--------> Secret code");
//         currentHint.classList.add("black");
//       } else {
//         // console.log(currentHint, "-- 2 --- >current Hint");
//         currentHint.classList.add("white");
//         console.log(
//           getComputedStyle(currentHint).backgroundColor,
//           "current Hint"
//         );
//       }
//     }
//   }

//   if (currentHint.id === ) {
//     selectionChoiceRow1.forEach(function (color, index) {
//       if (currentHint[i] === secretCode[i]) {
//         currentHint.classList.add("black");
//       } else {
//         currentHint.classList.add("white");
//       }
//     });
//   }
//   if (currentHint.id === "hint-3") {
//     currentHint.classList.add("black");
//   }
//   if (currentHint.id === "hint-4") {
//     currentHint.classList.add("black");
