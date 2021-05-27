var grid = 50;
var width = 1366;
var carGroup1,logGroup1;
var grassHeight = 100;
var gameState = "play";
var carAnimation1,carAnimation2 ,logAnimation, playerAnimation;
var school;
var cars,logs;
var player;

function preload()
{
 carAnimation1=loadAnimation("images/car1.png");
 carAnimation2=loadAnimation("images/car2.png");
 playerAnimation=loadAnimation("images/Player-03.png");
 logAnimation=loadAnimation("images/log2.png");
}

function setup() {
  createCanvas(1366,2700);
  carGroup1 = new Group();
  logGroup1 = new Group();
  
  for (i=0;i<6;i++) {
    var bottomGrass1=createSprite(683,height-(50)-(i*400),width,grassHeight);

   if (i%2===0) {
     var road=createSprite(683,height-(50)-(i*400)-grassHeight,width,300);
     road.shapeColor="black";
   }
    bottomGrass1.shapeColor="grey";
  }

 for (i=0;i<40;i++) {
   cars=new Car(2);
   carGroup1.add(cars.spt);
 }

 for (i=0;i<40;i++) {
  logs=new Log(-2);
  logGroup1.add(logs.spt);
}

for (i=1;i<logGroup1.length;i++) {
  if (logGroup1<0) {
   logGroup.x=width;
}
if (carGroup1<0) {
  carGroup1.x=width;
  carGroup1.y=height;
}

}

 player = new Player(width/2,height-25);

KeyPressed();



 }

function draw() {
  background("skyblue");
 
  translate(0,-player.spt.y+height-150);

  if (carGroup1.isTouching(player.spt)) {
    player.spt.x=width/2;
    player.spt.y=height-75;
  }
  
 if (logGroup1.isTouching(player.spt)) {
   player.spt.x=player.spt.x-3;

 } else if ((player.spt.y>height-1550 && player.spt.y<height-1330)||
             (player.spt.y<height-800 && player.spt.y>height-850)||
             (player.spt.y>height)||
             (player.spt.x<0)||
             (player.spt.x>width)){

              player.spt.x=width/2;
              player.spt.y=height-75;
 }



  drawSprites();
}
function KeyPressed(){
  if (keyCode==UP_ARROW) {
    player.move(0,-2);
  }else if (keyCode==DOWN_ARROW) {
    player.move(0,2);
  }else if (keyCode==LEFT_ARROW) {
    player.move(-2,0);
  }else if (keyCode==RIGHT_ARROW) {
    player.move(2,0);
  }
}


