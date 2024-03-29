/*----- constants -----*/


/*----- state variables -----*/


/*----- cached elements  -----*/


/*----- event listeners -----*/


/*----- functions -----*/

// window.onload() = function() {
// // instructions();//
// startGame()

// }


// clicking the colour buttons returns the colour
const buttonSelector = document.querySelectorAll(".color-buttons > .color");

buttonSelector.forEach(function(button) {
    button.addEventListener("click", function() {
        selectColor(button.id)  })
})

function selectColor(color){
   console.log(color)
}

let secretCode = Math.random


const row = document.getElementById("row-1")
console.log(row)
const selectionCircles = row.getElementsByClassName("choice")



selectionCircles[0].style.backgroundColor = selectColor
console.log(selectionCircles[1])
console.log(selectionCircles[2])
console.log(selectionCircles[3])