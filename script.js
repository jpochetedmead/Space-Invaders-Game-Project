/**************************
          * JS *
 * Final Project: JS Game *
     * Space Invaders *
 **************************/
/*
1. As a Player, I want to press the arrow keys so I can move the space ship left and right.  (3)(In progress...)
2. As a Player, I want to see the enemies, so I can aim at them and see their movements (3)
3. As a Player, I want to press the up key, so I can see the bullet and shoot the enemies and see when enemies shoot at me (8)
4. As a Player, I want to see the enemies blow up, so I can tell that they are dead (5)
5. As a Player, I want to see my lives and know when I die , so I can see when I’m going to die and when to restart (2)
6. As a player I want to see the score, so I can see how well I’m doing (1)
7. As a Player, I want to see an end screen , so I can tell that I beat the level (1)
8. As a Player, I want to press a button , so I can restart the game (1)(Done.)

Controls:
Left Arrow = Turn Left
Right Arrow = Turn Right
Up Arrow / Space Bar = Shoot
R / r  = Restart Game

Sounds: -EXTRA-
Make a sound whenever player shoots.
Make a sound whenever player destroys an enemy.
Make a sound whenever player lose a life.
Make a sound if the player lose the game.
Make a sound if player goes to a new level.
Make a sound if player wins the game.
*/


//Making the player move
let canvas = document.body.getElementsByClassName('canvas');
let player = document.body.getElementsByClassName("Player");
let enemy = document.body.getElementsByClassName("enemy");

//Controlers Box
let gameControlers = document.getElementsByClassName("gameControlers");

//Testing Controlers for movement, shooting and restart game.
document.addEventListener('keydown', controlers);

function controlers(down) {
  if (down.key === 'ArrowLeft') {
    // left arrow to turn left.
    alert("Move Left");
  }
  if (down.key === 'ArrowRight') {
    // right arrow to turn right.
    alert("Move Right");
  }
  if (down.key === 'ArrowUp' || down.key === ' ') {
    // Up Arrow || SpaceBar to shoot.
    alert("Shoot");
  }
  if (down.key === 'r' || down.key === 'R') {
    // r key || R key to restart the game.
    alert("Restart Game");
    window.location.reload();
  }
}

//Reset Game - Let's have this until we come up with a better way to do it "if needed".
const playAgainButton = document.querySelector('button.playAgainButton');
playAgainButton.addEventListener("click", () => {
       window.location.reload();
     });
