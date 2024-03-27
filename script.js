/*----- constants -----*/
color

/*----- state variables -----*/


/*----- cached elements  -----*/


/*----- event listeners -----*/


/*----- functions -----*/

// window.onload() = function() {
// //instructions();//
// startGame()

// }


const buttonSelector = document.querySelectorAll(".color-buttons > .color");

buttonSelector.forEach(function(button) {
    button.addEventListener("click", function() {
        selectColor(button.id)  })
})

function selectColor(color){
   console.log(color)
}

