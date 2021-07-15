window.onload = function() {
    var canvas = document.getElementById("canvas");
    var ctx = canvas.getContext("2d");
    var cannon = document.getElementById("cannon");
    ctx.drawImage(cannon, 10, 10, 10, 10);
  };

// let cannon = new Image();
// let projectile = new Image();
// let target = new Image();

// function init(){
//     window.requestAnimationFrame(draw);
// }

// function draw(){
//     let ctx = document.getElementById("canvas").getContext('2d');

//     ctx.drawImage(cannon, 150, 150);
  
// }

// init();
// console.log (cannon.src);