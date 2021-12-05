var car1, car1image
var car2, car2image
var highway, highwayImage
var obstacle1, obstacle1Image;
var obstacle2, obstacle2Image
var PLAY = 1;
var END = 0;
var gameState = PLAY;
var obstacle1group, obstacle2group
var score = 0

function preload(){
car1image = loadImage("White-modern-car-on-transparent-background-PNG.png")
//car2image = loadImage("Green-modern-car-on-transparent-background-PNG.png")
highwayImage = loadImage("highway3.jpg")
obstacle1Image = loadImage("bananapeel.png")
obstacle2Image = loadImage("trashcan.png")
obstacle1group =  new Group ();
obstacle2group = new Group();

}

function setup() {
 createCanvas(800,400);
 var message = "This is a message";
 console.log(message)
 highway = createSprite(100,10,400,20);
 highway.addImage("highway",highwayImage);
 highway.x = highway.width /2;

 car1 = createSprite(60,250)
 car1.addImage(car1image)
car1.scale= 0.02;



 


// gameOver = createSprite(300,100);
 //gameOver.addImage(gameOverImg);

 //restart = createSprite(300,140);
 //restart.addImage(restartImg);
 
 //gameOver.scale = 0.5;
  //restart.scale = 0.5; 

  invisibleGround = createSprite(200,190,400,10);
  invisibleGround.visible = false;



}


function draw() {
background("black");
drawSprites()
textSize(25);
stroke("black");
text("Score"+ score,500,50)
if(gameState === PLAY){

score = score + Math.round(frameCount/100);
highway.velocityX = -4
if(highway.x <0) {
  highway.x = highway.width/2;

}
if(keyDown("down")){
car1.y = 350;

}
if(keyDown("up")){
  car1.y = 250;

}
spawnobstacles();
if(obstacle1group.isTouching(car1)|| obstacle2group.isTouching(car1)){
  gameState = END;
}

}
if(gameState === END){
highway.velocityX = 0;
obstacle1group.setVelocityXEach(0);
obstacle2group.setVelocityXEach(0);

}
}

 

function spawnobstacles(){
  if(frameCount %100 === 0 ){

obstacle1 = createSprite(600,275,20,20);
obstacle1.addImage(obstacle1Image)
obstacle1.velocityX = -4;
obstacle1.scale = 0.1
obstacle2 = createSprite(800,360,20,20);
obstacle2.addImage(obstacle2Image)
obstacle2.velocityX = -4
obstacle2.scale = 0.07
obstacle1group.add(obstacle1);
obstacle2group.add(obstacle2);
}
}