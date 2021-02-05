var object1, object2;
var object3, object4;


function setup() {
  createCanvas(800,400);
  object1 = createSprite(400, 200, 100, 50);
  object2 = createSprite(400,200,50,100);

  object3 = createSprite(200, 240, 100, 50);
  object4 = createSprite(200,140,50,100);

  object1.shapeColor = "blue";
  object2.shapeColor = "red";

  object3.shapeColor = "orange";
  object4.shapeColor = "grey";

  object3.velocityY = -2;
  object4.velocityY = 2;
}

function draw() {
  background(255,255,255);  
  
  object1.x = mouseX;
  object1.y = mouseY;

  if (isTouching(object1, object2)){
    object1.shapeColor = "yellow";
    object2.shapeColor = "green";
  }

  else{
    object1.shapeColor = "blue";
    object2.shapeColor = "red";
  }
  
bounceOff(object3, object4);

  drawSprites();
}













