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
*/


//making the rows

/*let grid = [] 
for (let i = 0; i < 54; ++i)
    grid.push(i);
    console.log(grid);
for (let enemy of grid) 
*/


//making the player move
let spaceship = document.getElementById('player');
let canvas = document.getElementById('canvas');
let position = 260;
window.addEventListener("keydown", event => {
    if (event.key == "ArrowLeft") {
      console.log('left arrow was pressed');
      position -= 20;
        spaceship.style.left = position +'px'
        if (position <= -20) {
            position += 20;
            spaceship.style.left = position + 'px';
            
        }
    }

    
    if (event.key == "ArrowRight"){
        console.log('right arrow was pressed');
        position += 20;
        spaceship.style.left = position +'px'
       
        if (position >= 540) {
            position -= 20;
            spaceship.style.left = position + 'px';
            
        }
    }

    if (event.key =="ArrowUp") {
        console.log('fire button was pressed')
    }
    if (event.key == "r") {
        console.log('refresh');
    }
  });
