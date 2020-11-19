var bullet,wall;
var speed,weight,thickness;
function setup() {
  createCanvas(1600,400);
 bullet=createSprite(50, 200, 20, 40);
 wall=createSprite(1200,200,thickness,height/2);
 wall.shapeColor=(80,80,80);
 speed=random(223,321);
 weight=random(30,52);
 thickness=random(22,83);
 bullet.velocityX=speed;
}

function draw() {
  background(0);  
  if(hasCollided(bullet,wall))
  {
    bullet.velocityX=0
    var damage=0.5*weight*speed*speed/(thickness*thickness*thickness)

    if(damage>10)
    {
      wall.shapeColor=color(225,0,0);
    }


    if(damage<10)
    {
      wall.shapeColor=color(0,255,0);
    }
  }
  drawSprites();
}
function hasCollided(lbullet,lwall)
{
  bulletRightEdge=lbullet.x+lbullet.width;
  wallleftEdge=lwall.x;
  if(bulletRightEdge>wallleftEdge)
  {
    return true
  }
  return false
}