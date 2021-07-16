//make images appear
window.onload = function() {
    let canvas = document.getElementById("canvas");
    let ctx = canvas.getContext("2d");

    let cannon = document.getElementById("cannon");
    let projectile = document.getElementById("projectile");
    let target = document.getElementById("target");

    let positionCannon= 260;
    let shooting = 370;
    let positionVirus= goal();
    function goal(min, max) {
        min = Math.ceil(20);
        max = Math.floor(500);
        return Math.floor(Math.random() * (max - min + 1) + min); //The maximum is inclusive and the minimum is inclusive
      }
    
    // //cut virus image into circle
    // ctx.beginPath();
    // ctx.arc(positionVirus +40, 60, 40, 0, 2 * Math.PI, false);
    // ctx.clip();

    ctx.drawImage(cannon, positionCannon, 450, 80, 80);
    // ctx.drawImage(projectile, positionCannon, shooting, 80, 80);
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

    ctx.clearRect(positionCannon, 450, 80, 80);
    positionCannon -= 3;
    ctx.drawImage(cannon, positionCannon, 450, 80, 80);
    
  }

  // right
    //if right pressed and not on the far right
  if ( (keys[39]) && (positionCannon !== 500) ) {
    //remove cannon image
    ctx.clearRect(positionCannon, 450, 80, 80);
    //change cannon image coordinate
    positionCannon += 3;
    //add new cannon image
    ctx.drawImage(cannon, positionCannon, 450, 80, 80);
  }

  // shooting
  if (keys[32]) {

    //function to move projectile
    function start() {
      //clear previous image
      ctx.clearRect(positionCannon, shooting, 80, 80);

      //if didn't reach top end of box, move 1px
      if (shooting !==20){
      shooting--;
      console.log(shooting);
      ctx.drawImage(projectile, positionCannon, shooting, 80, 80);
      }

      //if reached, stop interval
      else {
        clearInterval(animation);
      }
    }

    //initiate interval to move it every 5 millisec
    let animation = setInterval(start, 5);

    //reset after interval stopped
    if (shooting == 20){
      shooting = 370;
    }
    
    console.log('shoot')

  }

  e.preventDefault();
}

//On Key Up
function keysReleased(e) {
  // mark keys that were released
  keys[e.keyCode] = false;
}

};