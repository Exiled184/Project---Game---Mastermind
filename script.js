/*----- constants -----*/
const colors = ["red", "blue", "yellow", "green", "orange", "purple"]

/*----- state variables -----*/
let secretCode = generateSecretCode(colors)

/*----- cached elements  -----*/


/*----- event listeners -----*/


/*----- functions -----*/

window.onload = function() {
// instructions();//
// startGame()
console.log("--->", secretCode)
}


// initalising the game/secret code
function generateSecretCode (colors){
        const secretColor1= randomColor(colors);
        const secretColor2= randomColor(colors);
        const secretColor3= randomColor(colors);
        const secretColor4= randomColor(colors);
        return [secretColor1,secretColor2,secretColor3,secretColor4]
}
function randomColor(colors) {
    const numberOfColors = colors.length;
        const randomColorChoice = Math.floor(Math.random() * numberOfColors);
        const generateSecretCode = colors[randomColorChoice];
        return generateSecretCode
}

// restart button
document.querySelector(".restart").addEventListener("click",handleRestart);

function handleRestart() {
    secretCode = generateSecretCode(colors);
    console.log(secretCode)
}

// clicking the colour buttons returns the colour
const buttonSelector = document.querySelectorAll(".color-buttons > .color");

buttonSelector.forEach(function(button) {
    button.addEventListener("click", function() {
        selectColor(button.id)  })
})

function selectColor(color){
   console.log(color)
}

// secret code
// document.querySelector(".computer-code").classList.toggle("invisible");

// const computerCode = document.getElementsByClassName("computer-code")
// console.log(computerCode)
// const secretCode = document.querySelector("computer-code > .secret-code")
// console.log(secretCode)





// code selection
const row = document.getElementById("row-1")
console.log(row)
const selectionCircles = row.getElementsByClassName("choice")



// selectionCircles[0].style.backgroundColor = selectColor
// console.log(selectionCircles[1])
// console.log(selectionCircles[2])
// console.log(selectionCircles[3])
