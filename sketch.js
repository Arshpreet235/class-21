var fixedRect, movingRect;
var go1,go2,go3 ;
function setup() {
  createCanvas(1200,800);
  fixedRect = createSprite(600, 400, 50, 80);
  fixedRect.shapeColor = "green";
  fixedRect.debug = true;
  movingRect = createSprite(400,200,80,30);
  movingRect.shapeColor = "green";
  movingRect.debug = true;

go1 = createSprite(200,200,50,30) ;
go2 =  createSprite(500,500,30,50);
go3 = createSprite (700,600,40,20);
}

function draw() {
  background(0,0,0);  
  movingRect.x = World.mouseX;
  movingRect.y = World.mouseY;

if(isTouching(movingRect,go1)){
movingRect.shapeColor = "yellow";
    go1.shapeColor = "yellow";

}
else {
   movingRect.shapeColor = "green";
   go1.shapeColor = "green";
} 

bounceOff (movingRect,fixedRect) ;

  drawSprites ();
 
}
/*function isTouching (object1,object2) {
  if (object1.x - object2.x < object2.width/2 + object1.width/2
      && object2.x - object1.x < object2.width/2 + object1.width/2
      && object1.y - object2.y <object2.height/2 + object1.height/2
      && object2.y - object1.y < object2.height/2 + object1.height/2) {
    return true ;

  }
  else {
   return false ;
  }*/




