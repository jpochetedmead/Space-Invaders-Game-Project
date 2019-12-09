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
let spaceship = document.getElementById('player');
let canvas = document.querySelector('.canvas');
let playerX = 245;
let playerY = 25;
let bulletX = 250;
let bulletY = 24;
let bulletAr = [];


function drawBullets() {
    Array.from(canvas.querySelectorAll('.bullet')).forEach(oldBullet => {
        canvas.removeChild(oldBullet);
    });
    //find all divs with a class of bullet and delete from page
    //for loop over bullet array
        for (let bullet of bulletAr) {
            bulletEl = document.createElement('div');
            bulletEl.className = 'bullet';
            bulletEl.style.bottom = bullet[1] + 30 + 'px';
            bulletEl.style.left = bullet[0] + 18 + 'px';
            canvas.appendChild(bulletEl);
            
            
        }

    //for each bullet make a div with the class of bullet
    //set left and top styles according to itself
    //append div to canvas
}
  
  function animateBullet(time, lastTime) {
    let bulletEl = document.querySelector("#bullet");
    if (lastTime != null) {
        bulletY += (time - lastTime) * 0.4;
    }
    bullet.style.bottom = (bulletY + 20) + "px";

    if (bulletY >= 650){
        canvas.removeChild(bulletEl);
        bulletY = 20;
    }
        
    else {
    requestAnimationFrame(newTime => animateBullet(newTime, time));
    }
    
}



for (let counter = 0; playerGrid.length <= 1; counter ++) {
  playerGrid.push('');
  const node = document.createElement("div");
  const textnode = document.createTextNode(player[0]);
  const divplayer = document.querySelector('div.player');
  node.appendChild(textnode);
  divplayer.appendChild(node);
}

// Making the player move

window.addEventListener("keydown", event => {
    if (event.key == "ArrowLeft") {
      console.log('left arrow was pressed');
      playerX -= 15;
        spaceship.style.left = playerX +'px';
        if (playerX <= -0){
            playerX += 15;
            spaceship.style.left = playerX + 'px';
        }
    }


    if (event.key == "ArrowRight") {
        console.log('right arrow was pressed');
        playerX += 15;
        spaceship.style.left = playerX +'px';
        console.log(playerX)
        if (playerX >= 515) {
            playerX -= 15;
            spaceship.style.left = playerX + 'px';
        }
    }

// Making the player shoot


    if (event.key === 'ArrowUp' || event.key === ' ') {
        /*bulletAr.push([bulletX, bulletY])
        for (let i of bulletAr){
            console.log(bulletAr[i][1]) + 20 + 'px';
            console.log(bulletAr)
        }*/
    let bullet = document.createElement('div');
    canvas.appendChild(bullet);
    document.querySelector("#bullet")
    bullet.style.left = (playerX + 10 + 'px');
    bulletAr.push([playerX, bulletY])
    drawBullets();
    requestAnimationFrame(animateBullet);
    
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
    const enemyEl = document.querySelector('.enemies');
    node.appendChild(textnode);
    enemyEl.appendChild(node);
  }

// Make enemies move by themselfs right, bottom, left, bottom, repeat.
/* Trying to work on the enemies movement.... */
const enemyDiv = document.getElementsByClassName('enemies'); //This selects the enemies div
for (let count = 0; count < 100; count++) {
  enemyDiv.style.top = count + "px";
  enemyDiv.style.left = count + "px";
  console.log(count);
}

//Reset Game - Let's have this until we come up with a better way to do it "if needed".
const playAgainButton = document.querySelector('button.playAgainButton');
playAgainButton.addEventListener("click", () => {
       window.location.reload();
     });
