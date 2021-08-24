var ship,sea;
var shipImage,seaAng;

function preload()
{
 shipImage=loadAnimation("ship-1.png","ship-2.png","ship-3.png","ship-4.png");
 seaAng=loadImage("sea.png");
}
 


function setup()
{
  createCanvas(400,400);
  sea=craeteSprite(200,200,20,20);
  sea.addImage(seaAng);
  sea.velocityX=-5;
  sea.scale=0.25;

  ship=createSprite(200,200,20,20);
  ship.addImage("moving",shipImage);

  
}


function draw()
 {
  background("blue");
  drawSprites();
 
  if (sea.x < 0) {
    sea.x=sea.width/2;
  }
}
