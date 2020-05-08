var thickness,wall;
var speed,weight,bullet;
var damage;



function setup() {
  createCanvas(1600,400);
  //createSprite(400, 200, 50, 50);

  speed = random(223,321);
  weight = random (30,52);
  thickness = random(22,83);

  bullet = createSprite(50,200,20,50);
  wall = createSprite(1200,200,thickness,height/2);

  damage = 0.5 * weight*speed*speed/thickness*thickness*thickness;
}

function draw() {
  background(255,255,255);  
  drawSprites();
  bullet.velocityX = speed;

  if(hasCollided(bullet,wall)){
    bullet.velocityX = 0;
  }
  if(damage>10){
    wall.shapeColor = color(255,0,0);
      }
  if(damage<10){
    wall.shapeColor = color(0,255,0);
  }
 }

 function hasCollided(bullet,wall){
   bulletRightEdge = bullet.x + bullet.width;
   wallLeftEdge = wall.x;
   if(bulletRightEdge>=wallLeftEdge){
     return true;
   }
   else{
     return false;
   }
  }