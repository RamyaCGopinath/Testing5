var ball;

function setup() {
  createCanvas(700,500);
  ball = createSprite(350,250,20,20);
  ball.shapeColor = "blue";
}

function draw() 
{

  background(30);

  if(keyIsDown(UP_ARROW)){
    ball.y-=2;
  }
  if(keyIsDown(DOWN_ARROW)){
    ball.y+=2;
  }
  if(keyIsDown(LEFT_ARROW)){
    ball.x-=2;
  }
  if(keyIsDown(RIGHT_ARROW)){
    ball.x+=2;
  } 
  drawSprites();
}




