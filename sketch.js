var fixedRect, movingRect;
var car, wall;

function setup() {
  createCanvas(1200,800);
  fixedRect = createSprite(600, 400, 50, 80);
  fixedRect.shapeColor = "green";
  fixedRect.debug = true;
  movingRect = createSprite(400, 200, 80, 30);
  movingRect.shapeColor = "green";
  movingRect.debug = true;
  car = createSprite(900, 100, 60, 30);
  car.shapeColor = "pink";
  car.velocityX = -3;
  wall = createSprite(300, 100, 30, 60);
  wall.shapeColor = "white";
}

function draw() {
  background(0,0,0);  
  //movingRect.x = World.mouseX;
 // movingRect.y = World.mouseY;

if (isTouching(movingRect, fixedRect)){
  fixedRect.shapeColor = "blue";
  movingRect.shapeColor = "blue";
}
else {
  fixedRect.shapeColor = "green";
  movingRect.shapeColor = "green";
};
if (isTouching(car, wall)){
  car.shapeColor = "yellow";
}
else {
  car.shapeColor = "pink";
}
  
  drawSprites();
}

