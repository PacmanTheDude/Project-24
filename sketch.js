var c_ball;
var b1, b2, b3;
var ground;

function setup() {
	createCanvas(800, 700);
	c_ball = createSprite(100,630,30,30);
	c_ball.shapeColor = "magenta";
	ground = createSprite(400,650,900,10);
	ground.shapeColor = "yellow";
	b1 = createSprite(670,640,200,10);
	b1.shapeColor = "white";
	b2 = createSprite(770,600,10,90);
	b2.shapeColor = "white";
	b3 = createSprite(570,600,10,90);
	b3.shapeColor = "white";
}


function draw() {
  background("black");
  c_ball.bounceOff(b2);
  c_ball.bounceOff(b3);
  c_ball.bounceOff(ground);
  
  if(keyDown(UP_ARROW)) {
	  c_ball.velocityY = -7;
  }

  if(keyDown(RIGHT_ARROW)) {
	  c_ball.velocityX = 7;
	  c_ball.velocityY = 1;
  }

  if(keyDown(DOWN_ARROW)) {
	  c_ball.velocityY = 3;
  }

  if(c_ball.isTouching(b1)) {
	  c_ball.velocityX = 0;
	  c_ball.velocityY = 0;
  }
  
  drawSprites();
 
}



