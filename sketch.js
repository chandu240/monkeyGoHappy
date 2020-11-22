
var monkey , monkey_running
var banana ,bananaImage, obstacle, obstacleImage
var FoodGroup, obstacleGroup
var score, ground, groundImage;

function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");
  groundImage = loadImage("forest.jpg");
}



function setup() {
  createCanvas(600,600);
  monkey = createSprite(80,10,20,20);
  monkey.addAnimation("moving",monkey_running);
  monkey.scale = 0.1
  
  ground = createSprite(400,350,900,10)
  ground.velocityX = 4
  ground.x = ground.width/2;
  //ground.addImage("forest",groundImage);
  ground.scale = 1.5;

  obstaclesGroup = new Group();
  FoodGroup = new Group();
}


function draw() {
  background("white");
  if(ground.x>450){
    ground.x = 400;
  }
  monkey.velocityY = monkey.velocityY + 0.8
  if(keyDown("space")&& monkey.y >= 315){
    monkey.velocityY= -15;
  }
  monkey.collide(ground)
  
  createObstacles();
  createFruits();
  drawSprites();
}
function createObstacles(){
  if(frameCount % 300 === 0) {
    var obstacle = createSprite(600,310,10,40);
    //obstacle.debug = true;
    obstacle.addImage("obstacle",obstacleImage)
    obstacle.velocityX = -6;
    obstacle.scale = 0.2;
    obstacle.lifetime = 700;
    //add each obstacle to the group
    obstaclesGroup.add(obstacle);
  }
}
function createFruits(){
  if (frameCount % 80 === 0) {
    var banana = createSprite(600,120,40,10);
    banana.y = Math.round(random(80,120));
    banana.addImage(bananaImage);
    banana.scale = 0.1;
    banana.velocityX = -3;
    
     //assign lifetime to the variable
    banana.lifetime = 200;
    
  
    
    //add each fruit to the group
    FoodGroup.add(banana);
  }
}





