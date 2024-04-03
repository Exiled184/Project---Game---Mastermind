/*----- constants -----*/
const colors = ["red", "blue", "yellow", "green", "orange", "purple"];
const hintColors = ["grey", "white", "black"];
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

function selectColor(color) {
  if (selectionChoiceRow1.length === 4) {
    hints(hintColors);
  }
  if (selectionChoiceRow1.length < 4) {
    selectionChoiceRow1.push(color);
    const currentTile = document.querySelector(
      "#guess-" + selectionChoiceRow1.length
    );
    currentTile.classList.add(color);
    console.log("____>", "#guess-" + selectionChoiceRow1.length);
  } else if (selectionChoiceRow2.length < 4) {
    selectionChoiceRow2.push(color);
    const currentTile = document.querySelector(
      "#guess-" + (4 + selectionChoiceRow2.length)
    );
    currentTile.classList.add(color);
  } else if (selectionChoiceRow3.length < 4) {
    selectionChoiceRow3.push(color);
    const currentTile = document.querySelector(
      "#guess-" + (8 + selectionChoiceRow3.length)
    );
    currentTile.classList.add(color);
  } else if (selectionChoiceRow4.length < 4) {
    selectionChoiceRow4.push(color);
    const currentTile = document.querySelector(
      "#guess-" + (12 + selectionChoiceRow4.length)
    );
    currentTile.classList.add(color);
  } else if (selectionChoiceRow5.length < 4) {
    selectionChoiceRow5.push(color);
    const currentTile = document.querySelector(
      "#guess-" + (16 + selectionChoiceRow5.length)
    );
    currentTile.classList.add(color);
  } else if (selectionChoiceRow6.length < 4) {
    selectionChoiceRow6.push(color);
    const currentTile = document.querySelector(
      "#guess-" + (20 + selectionChoiceRow6.length)
    );
    currentTile.classList.add(color);
  } else if (selectionChoiceRow7.length < 4) {
    selectionChoiceRow7.push(color);
    const currentTile = document.querySelector(
      "#guess-" + (24 + selectionChoiceRow7.length)
    );
    currentTile.classList.add(color);
  } else if (selectionChoiceRow8.length < 4) {
    selectionChoiceRow8.push(color);
    const currentTile = document.querySelector(
      "#guess-" + (28 + selectionChoiceRow8.length)
    );
    currentTile.classList.add(color);
  } else if (selectionChoiceRow9.length < 4) {
    selectionChoiceRow9.push(color);
    const currentTile = document.querySelector(
      "#guess-" + (32 + selectionChoiceRow9.length)
    );
    currentTile.classList.add(color);
  } else if (selectionChoiceRow10.length < 4) {
    selectionChoiceRow10.push(color);
    const currentTile = document.querySelector(
      "#guess-" + (36 + selectionChoiceRow10.length)
    );
    currentTile.classList.add(color);
  }
}

// check hints
function hints(hintColors) {
  if (selectionChoiceRow1.length === 4) {
    for (let i = 1; i <= selectionChoiceRow1.length; i++) {
      const currentHint = document.getElementById("hint-" + i);
      console.log(currentHint, "current Hint");
      if (currentHint.id === "hint-1") {
        selectionChoiceRow1.forEach(function (color, index) {
          if (secretCode.includes(color, index)) {
            currentHint.classList.add("black");
          } else if (secretCode.includes(color, !index)) {
            currentHint.classList.add("white");
          }
        });
      }
      // if (currentHint.id === "hint-2") {
      //   selectionChoiceRow1.forEach(function(color,index){
      // 	if (secretCode.indexOf(color)){
      // 		currentHint.classList.add("black")
      // 	}
      //   })
      // }
      //   if (currentHint.id === "hint-3") {
      //     currentHint.classList.add("black");
      //   }
      //   if (currentHint.id === "hint-4") {
      //     currentHint.classList.add("black");
      //   }
    }
  }
}
