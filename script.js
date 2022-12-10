score=0;
cross =  true;

audio = new Audio('bgmusic.wav');
audiogo = new Audio('gameover.wav');

setTimeout(() => {
  audio.play()
}, 1000);

document.onkeydown = function (e)
{
    console.log("Key code is:", e.keyCode)
    if (e.keyCode == 38){
     zombie = document.querySelector('.zombie');
     zombie.classList.add('animateZombie');
     setTimeout(() => {
        zombie.classList.remove('animateZombie')
     }, 700);   
    }

if(e.keyCode == 39){
    zombie = document.querySelector('.zombie');
     zombieX = parseInt(window.getComputedStyle(zombie, null).getPropertyValue('left'));
     zombie.style.left = zombieX + 112 +"px"; 
   }
   if(e.keyCode==37){
    zombie = document.querySelector('.zombie');
     zombieX = parseInt(window.getComputedStyle(zombie, null).getPropertyValue('left'));
     zombie.style.left = (zombieX - 112) + "px"; 
   }

}

setInterval(() => {
zombie = document.querySelector('.zombie');
gameOver = document.querySelector('.gameOver');
obstacle = document.querySelector('.obstacle');

zx = parseInt(window.getComputedStyle(zombie, null).getPropertyValue('left'));
zy = parseInt(window.getComputedStyle(zombie, null).getPropertyValue('top'));

ox = parseInt(window.getComputedStyle(obstacle, null).getPropertyValue('left'));
oy = parseInt(window.getComputedStyle(obstacle, null).getPropertyValue('top'));

offsetX = Math.abs(zx-ox);
offsetY = Math.abs(zy-oy);
// console.log(offsetX, offsetY)

if (offsetX< 73 && offsetY< 52){
    gameOver.innerHTML = "Game Over - Reload to play Again"
    obstacle.classList.remove('obstacleAni')

    audiogo.play();
setTimeout(() => {
  audiogo.pause();
  audio.pause();
}, 1000);
}

else if(offsetX < 145 && cross) {
score += 100;
updateScore(score);
cross = false;
setTimeout(() => {
  cross =  true;  
}, 1000);


setTimeout(() => {
  aniDur = parseFloat(window.getComputedStyle(obstacle, null).getPropertyValue('animation-duration'));
  newDur = aniDur - 0.1;
  obstacle.style.animationDuration = newDur + 's';
  console.log('New animation duration: ', newDur)
}, 500);

}

}, 10);

function updateScore(score) {
    scoreCount.innerHTML = "Your Score: " + score
}
