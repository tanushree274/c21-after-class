var thickness,wall;
var bullet,speed,weight;


function setup() {
  createCanvas(1600,400);
 // createSprite(400, 200, 50, 50);
  thickness=random(22,83);
bullet =createSprite(50,200,50,10);
wall= createSprite (600,200,thickness,100);

speed=random(10,20);
weight=random(30,52);

bullet.velocityX =speed;
 

}
function draw() {
  background(255,255,255);  
  if ( wall.x-bullet.x < ( bullet.width+wall.width)/2){
    bullet.velocityX=0;
    var deformation=0.5*weight * speed * speed/22509;
     if(deformation>180){
  bullet.shapeColor="pink";
  
    }
  
    if(deformation<180 && deformation>100){
  bullet.shapeColor="green";
  
    }
  
    if(deformation<100){
  bullet.shapeColor="yellow";
    }
  }
  if (hasCollided(bullet,wall)){
    bullet.velocityX=0;
    var damage=0.5*weight * speed*speed/(thickness*thickness*thickness);
    if (damage>10){
      wall.shapeColor="blue";
    }
    if (damage<10){
    wall.shapeColor="red";
    }
    
    }
    drawSprites();
}

 


function hasCollided (lbullet,lwall){
  bulletRightEdge=lbullet.x + lbullet.width;
  wallLeftEdge=lwall.x;
  if (bulletRightEdge>=wallLeftEdge){
  return true 
  }
  return false;
  
  }