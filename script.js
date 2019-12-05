/**************************
          * JS *
 * Final Project: JS Game *
     * Space Invaders *
 **************************/
/*
1. As a Player, I want to press the arrow keys so I can move the space ship left and right.  (3)(Done... can be improved.)
2. As a Player, I want to see the enemies, so I can aim at them and see their movements (3)(In progress...)
3. As a Player, I want to press the up key, so I can see the bullet and shoot the enemies and see when enemies shoot at me (8)(In progress...)
4. As a Player, I want to see the enemies blow up, so I can tell that they are dead (5)
5. As a Player, I want to see my lives and know when I die , so I can see when I’m going to die and when to restart (2)
6. As a player I want to see the score, so I can see how well I’m doing (1)
7. As a Player, I want to see an end screen , so I can tell that I beat the level (1)
8. As a Player, I want to press a button , so I can restart the game (1)(Done.. can be improved.)

Controls:
Left Arrow = Turn Left
Right Arrow = Turn Right
Up Arrow / Space Bar = Shoot
R / r  = Restart Game
*/

// Showing the Player Spaceship
let playerGrid = [''];
let player = ['🚀'];
for (let counter = 0; playerGrid.length <= 1; counter ++) {
  playerGrid.push('');
  const node = document.createElement("div");
  const textnode = document.createTextNode(player[0]);
  const divplayer = document.querySelector('div.player');
  node.appendChild(textnode);
  divplayer.appendChild(node);
}

// Making the player move
let spaceship = document.getElementById('player');
let canvas = document.getElementsByClassName('canvas');
let position = 260;
window.addEventListener("keydown", event => {
    if (event.key == "ArrowLeft") {
      console.log('left arrow was pressed');
      position -= 20;
        spaceship.style.left = position +'px';
        if (position <= -20){
            position += 20;
            spaceship.style.left = position + 'px';
        }
    }

    if (event.key == "ArrowRight") {
        console.log('right arrow was pressed');
        position += 20;
        spaceship.style.left = position +'px';
        if (position >= 540) {
            position -= 20;
            spaceship.style.left = position + 'px';
        }
    }

// Making the player shoot
    if (event.key === 'ArrowUp' || event.key === ' ') {
    // Up Arrow || SpaceBar to shoot.
    console.log('fire button was pressed');
  }

// Restart the game
  if (event.key === 'r' || event.key === 'R') {
        // r key || R key to restart the game.
        console.log('refresh');
        window.location.reload();
      }

  });


  // Make enemies into an array
  let enemiesGrid = [''];
  let enemies = ['👾'];

  for (let counter = 0; enemiesGrid.length <= 55; counter ++) {
    enemiesGrid.push('');
    console.log(enemiesGrid);
    const node = document.createElement("div");
    const textnode = document.createTextNode(enemies[0]);
    const canvas = document.querySelector('div.enemies');
    node.appendChild(textnode);
    canvas.appendChild(node);
  }

// Make enemies move by themselfs right, bottom, left, bottom, repeat.
/* Trying to work on the enemies movement.... */
const enemyDiv = document.getElementsByClassName('enemies');
for (let count = 0; count < 100; count++) {
  enemyDiv.style.top = count + "px";
  enemyDiv.style.left = count + "px";
}
