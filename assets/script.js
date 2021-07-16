//hide replay button and game
document.getElementById("reload").style.display = "none";
document.getElementById("game").style.display = "none";
document.getElementById("start").style.display = "block";

//hit play button to display game
document.getElementById("starter").addEventListener("click", () => {
  document.getElementById("start").style.display = "none";
  document.getElementById("game").style.display = "block";
})

// on load
window.onload = function() {
  //initiate canvas  
  let canvas = document.getElementById("canvas");
    let ctx = canvas.getContext("2d");

    //base variables
    let cannon = document.getElementById("cannon");
    let projectile = document.getElementById("projectile");
    let target = document.getElementById("target");
    let score = 0;

    //base positioning
    let positionCannon= 260;
    let shooting = 370;
    //create array of positions for 10 targets
    let positionVirus= [];
    for (x=0; x<10; x++){
      positionVirus[x]=goal();
    }
console.log(positionVirus);
    function goal(min, max) {
        min = Math.ceil(20);
        max = Math.floor(500);
        return Math.floor(Math.random() * (max - min + 1) + min); //The maximum is inclusive and the minimum is inclusive
      }

    //make cannon and first target appear
    ctx.drawImage(cannon, positionCannon, 450, 80, 80);
    ctx.drawImage(target, positionVirus[score], 20, 80, 80);
    
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

       //make projectile appear
       ctx.drawImage(projectile, positionCannon, shooting, 80, 80);

      //if didn't reach top end of box, move 1px
      if (shooting !==20){
      //clear previous image
      ctx.clearRect(positionCannon, shooting, 80, 80);
      shooting--;
      ctx.drawImage(projectile, positionCannon, shooting, 80, 80);

        //if hit
        //if left edge of projectile is between edges of target
        if (shooting == 21) {  
          if ( ( (positionCannon <= Number(positionVirus[score]) )
          && (Number(positionVirus[score]) <= (positionCannon+80) ) )
            || ( (positionCannon <= Number(positionVirus[score]+80) )
                  && (Number(positionVirus[score]+80) <= (positionCannon+80) ) ) ){
                //update score
                score++;
                document.getElementById("score").innerHTML="Viruses destroyed: " + score + " /10";
                //clear old target
                ctx.clearRect(positionVirus[score-1], 20, 80, 80);
                //generate new target
                ctx.drawImage(target, positionVirus[score] , 20, 80, 80);

                if (score == 10){
                  document.getElementById("game").style.display = "none";
                  document.getElementById("reload").style.display = "block";
                }
              }
          else {console.log("prout");}

            }

        }

      //if reached, stop interval
      else {
        clearInterval(animation);
        ctx.clearRect(positionCannon, 20, 80, 80);
      }
    }

    //initiate interval to move it every 5 millisec
    let animation = setInterval(start, 5);

    //reset after interval stopped
    if (shooting == 20){
      shooting = 370;
    }

  }

  e.preventDefault();
  }

  //On Key Up
  function keysReleased(e) {
    // mark keys that were released
    keys[e.keyCode] = false;
  }

};

document.getElementById("reload").addEventListener("click", () => {
  document.location.reload();
})