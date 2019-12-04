/**************************
          * JS *
 * Final Project: JS Game *
     * Space Invaders *
 **************************/


//making the player move
let spaceship = document.getElementById('player');
let canvas = document.getElementById('canvas');
let position = 0;
window.addEventListener("keydown", event => {
    if (event.key == "ArrowLeft") {
      console.log('left arrow was pressed');
      position -= 10;
        spaceship.style.left = position +'px'
        //if (position >= )
    }

    
    if (event.key == "ArrowRight"){
        console.log('right arrow was pressed');
        position += 10;
        spaceship.style.left = position +'px'
    }

    if (event.key =="ArrowUp") {
        console.log('fire button was pressed')
    }
    if (event.key == "r") {
        console.log('refresh');
    }
  });