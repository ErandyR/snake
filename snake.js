
var snake=document.getElementById("cabezaSerpiente");
var contenedor=document.getElementById("contenedor");
var snakeLeft =0;
var snakeTop=0;

function movimientoDeSnake(e){
  if (e.keyCode == 39){
    snakeLeft += 20;
    snake.style.marginLeft = snakeLeft + "px";
    if(snakeLeft> 480){
      gameOver();
    }
  }
  if(e.keyCode == 37){
    snakeLeft -= 20;
    snake.style.marginLeft = snakeLeft + "px";
    if(snakeLeft < 0){
      gameOver();
    }
  }
  if(e.keyCode==38){
   snakeTop -= 20;
   snake.style.marginTop = snakeTop + "px";
   if(snakeTop < 0){
    gameOver();
   }
  }
  if(e.keyCode==40){
    snakeTop += 20;
    snake.style.marginTop = snakeTop + "px";
    if(snakeTop > 480){
      gameOver();

    }
  }
}
function gameOver(){
  alert("Game Over");

  snake.style.marginLeft = 0 + "px"; //regresar al punto de inicio
  snake.style.marginTop = 0 + "px";
}

document.onkeydown = movimientoDeSnake;
