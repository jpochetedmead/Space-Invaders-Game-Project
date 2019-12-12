/**************************
 * JS *
 * Final Project: JS Game *
 * Space Invaders *
 **************************/
/*
1. As a Player, I want to press the arrow keys so I can move the space ship left and right.  (3)(Done... can be improved.)
2. As a Player, I want to see the enemies, so I can aim at them and see their movements (3)(Done... can be improved.)
3. As a Player, I want to press the up key, so I can see the bullet and shoot the enemies and see when enemies shoot at me (8)(Done with player, working on the enemies...)
4. As a Player, I want to see the enemies blow up, so I can tell that they are dead (5)(Done...could be improved by adding explosion image and/or sound.)
5. As a Player, I want to see my lives and know when I die , so I can see when I’m going to die and when to restart (2)
6. As a player I want to see the score, so I can see how well I’m doing (1)(Done.)
7. As a Player, I want to see an end screen , so I can tell that I beat the level (1)(In progress...)
8. As a Player, I want to press a button or the "R"/"r" key, so I can restart the game (1)(Done)

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
let bulletAr = [];
let enemiesGrid = [''];
let playerPoints = 0;
let test = document.querySelector(".test");

// WINNING FEATURE
//const isEmpty = (currentValue) => currentValue < 40;
/*
const isEmpty = function currentValue(empty){
  if (enemiesGrid === '') {
    alert("huraaaa");
  }
};
console.log(enemiesGrid.every(isEmpty));
// expected output: true
*/

/*
let enemiesString =document.getElementsByClassName('enemies').innerHTML = enemiesGrid;
if (enemiesString.length === ) {
};
*/

// LOSING FEATURE
/*
function destroySpaceship() {
    let playerCollision = document.querySelectorAll('.player');
    let enemyCollision = document.querySelectorAll('.enemies div');
            if (collision(spaceship, enemy) === true) {
                playerCollision.textContent = '';
                alert("GAMEOVER");
            }
}
*/

// ENEMIES SHOOT FEATURE

//SCORE SYSTEM
let theScore = document.querySelector('.gameScorediv');
if (playerPoints < 5500) {
  theScore.innerHTML = 'Player Score: ' + playerPoints;
}

//
function bulletEnemy() {
    let bulletCol = document.querySelectorAll('.bullet');
    let enemyCol = document.querySelectorAll('.enemies div');
    for (let bullet of bulletCol) {
        for (let enemy of enemyCol) {
            if (enemy.textContent && collision(bullet, enemy)) {
                bulletAr = bulletAr.slice(0, Number(bullet.dataset.index))
                    .concat(bulletAr.slice(Number(bullet.dataset.index) + 1));
                enemy.textContent = '';
                playerPoints += 100;
                theScore.innerHTML = 'Player Score: ' + playerPoints;
                if (playerPoints === 5500) { //WIN CONDITION
                    console.log("WINNER!");
                    alert("WINNER!");
                    canvas.style.borderColor = "red";
                    document.querySelector(".gameScorediv").style.borderColor = "red";
                  }
            }
        }
    }
}

function collision(node1, node2) {
    let test1 = node1.getBoundingClientRect();
    let test2 = node2.getBoundingClientRect();

    if (test1.x < test2.x + test2.width &&
        test1.x + test1.width > test2.x &&
        test1.y < test2.y + test2.height &&
        test1.y + test1.height > test2.y) {
        test.style.backgroundColor = 'red';
        return true;
    }
}
collision(spaceship, test);

function moveBulletUp() {
    for (let bullet of bulletAr) {
        bullet[1] += 5;
        if (bullet[1] >= 650) {
            bulletAr.shift();
        }
    }
}

function bulletStart(x) {
    bulletAr.push([x, 24]);
}

function drawBullets() {
    removeBulletDivs();
    for (let index in bulletAr) {
        bulletEl = document.createElement('div');
        bulletEl.className = 'bullet';
        bulletEl.dataset.index = index;
        bulletEl.style.left = bulletAr[index][0] + 18 + 'px';
        bulletEl.style.bottom = bulletAr[index][1] + 30 + 'px';
        canvas.appendChild(bulletEl);
    }
}

function removeBulletDivs() {
    for (let div of canvas.querySelectorAll('.bullet')) {
        canvas.removeChild(div);
    }
}

//ANIMATE FUNCTION
let lastTime = performance.now();

function animate(now) {

    if (now - lastTime > 50) {
        lastTime = now;
        moveBulletUp();
        bulletEnemy();
        drawBullets();
        requestAnimationFrame(animate);
    } else {
        requestAnimationFrame(animate);
    }
}
requestAnimationFrame(animate);

for (let counter = 0; playerGrid.length <= 1; counter++) {
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
        spaceship.style.left = playerX + 'px';
        if (playerX <= -0) {
            playerX += 15;
            spaceship.style.left = playerX + 'px';
        }
    }

    if (event.key == "ArrowRight") {
        console.log('right arrow was pressed');
        playerX += 15;
        spaceship.style.left = playerX + 'px';
        console.log(playerX);
        if (playerX >= 515) {
            playerX -= 15;
            spaceship.style.left = playerX + 'px';
        }
    }

    // Making the player shoot
    // Up Arrow || SpaceBar to shoot.
    if (event.key === 'ArrowUp' || event.key === ' ') {

        bulletStart(playerX);
        requestAnimationFrame(animate);

        console.log('fire button was pressed');
    }

    // r key || R key to restart the game.
    if (event.key === 'r' || event.key === 'R') {
        console.log('refresh');
        window.location.reload();
        playAgainButton.style.backgroundColor = 'green';
        playAgainButton.style.color = 'white';
    }
    collision(spaceship, test); //Why do we have this line here?

});

// Make enemies into an array
let enemies = ['👾'];

for (let counter = 0; enemiesGrid.length <= 55; counter++) {
    enemiesGrid.push('');
    const node = document.createElement("div");
    const textnode = document.createTextNode(enemies[0]);
    const enemyEl = document.querySelector('.enemies');
    node.appendChild(textnode);
    enemyEl.appendChild(node);
}

// Make Enemies Move (right to left and viceversa while moving down at the same time)
let enemyDiv = document.querySelector('.enemies');
let countRightX = 0;
let countDownY = 0;

let angle = Math.PI / 2;

function animateEnemies(time, lastTime) {
    if (lastTime != null) {
        angle += (time - lastTime) * 0.003;
    }
    if (countRightX === 0) {
        enemyDiv.style.top = angle + 10 + "px";
        enemyDiv.style.right = (Math.cos(angle) * 44) + "px";
    }
    requestAnimationFrame(newTime => animateEnemies(newTime, time));
}
requestAnimationFrame(animateEnemies);

//Enemies blowing up (Change image and play sound)

//Reset Game - Let's have this until we come up with a better way to do it "if needed".
const playAgainButton = document.querySelector('button.playAgainButton');
playAgainButton.addEventListener("click", () => {
    window.location.reload();
});

//Game Controlers Div (Have them change colors whenever you do something with the spaceship)
//Later we may add sounds.
let theLeftbutton = document.querySelector('.left');
let theRightbutton = document.querySelector('.right');
let theUpbutton = document.querySelector('.up');

window.addEventListener("keydown", event => {
    if (event.key == "ArrowLeft") {
        theLeftbutton.style.background = "green";
    }
    if (event.key == "ArrowRight") {
        theRightbutton.style.background = "green";
    }
    if (event.key === "ArrowUp" || event.key === ' ') {
        theUpbutton.style.background = "red";
    }
});
window.addEventListener("keyup", event => {
    if (event.key == "ArrowLeft") {
        theLeftbutton.style.background = "";
    }
    if (event.key == "ArrowRight") {
        theRightbutton.style.background = "";
    }
    if (event.key === "ArrowUp" || event.key === ' ') {
        theUpbutton.style.background = "";
    }
});
