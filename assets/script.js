//make images appear
window.onload = function() {
    let canvas = document.getElementById("canvas");
    let ctx = canvas.getContext("2d");

    let cannon = document.getElementById("cannon");
    let projectile = document.getElementById("projectile");
    let target = document.getElementById("target");

    let positionCannon= 260;
    let shooting = 350;
    let positionVirus= goal();
    function goal(min, max) {
        min = Math.ceil(20);
        max = Math.floor(500);
        return Math.floor(Math.random() * (max - min + 1) + min); //The maximum is inclusive and the minimum is inclusive
      }
    ctx.drawImage(cannon, positionCannon, 450, 80, 80);
    ctx.drawImage(projectile, positionCannon, shooting, 80, 80);
    ctx.drawImage(target, positionVirus, 20, 80, 80);
    
    //moving and shooting
    window.addEventListener("keydown", keysPressed, false);
    window.addEventListener("keyup", keysReleased, false);

//Store the Key events in Array
var keys = [];

//On Key Down
function keysPressed(e) {
  // store an entry for every key pressed
  keys[e.keyCode] = true;

  // left
  if ( (keys[37]) && (positionCannon !== 20) ) {
    positionCannon -= 5;
    console.log('left');
    
  }

  // right
  if ( (keys[39]) && (positionCannon !== 500) ) {
    positionCannon += 5;
  }

  // shooting
  if (keys[32]) {
    //   shooting = 50; 
    // ctx.drawImage(projectile, positionCannon, shooting, 80, 80);
      console.log('shoot')
  }

  e.preventDefault();
}

//On Key Up
function keysReleased(e) {
  // mark keys that were released
  keys[e.keyCode] = false;
}

// window.requestAnimationFrame(draw);

};