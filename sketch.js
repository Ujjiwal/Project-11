var RunnerImg,pathImg,path,Runner,left_boundary,right_boundary;

function preload(){
  //pre-load images
  RunnerImg=loadAnimation("Runner-1.png","Runner-2.png");
  pathImg=loadImage("path.png");

  }

function setup(){
  createCanvas(400,400);
  //create sprites here
  path=createSprite(200,200);
  path.addImage(pathImg);
  path.velocityY=4;
  path.scale=1.2;

  Runner=createSprite(180,340,50,170);
  Runner.addAnimation("running",RunnerImg);
  Runner.scale=0.08;

  left_boundary=createSprite(0,300,100,600);
  right_boundary=createSprite(390,300,80,600);
  left_boundary.visible=false;
  right_boundary.visible=false;
  if(keyDown("right")){
    Runner.velocityX=10;
  }
  if(keyDown("left")){
    Runner.velocityX=10;
  }
  }

function draw() {
  background(0);

  Runner.x=World.mouseX;
  if(path.y > 400 ){
  path.y = height/2;
  }
  Runner.collide(left_boundary);
  Runner.collide(right_boundary);
  edges=createEdgeSprites();
  
  drawSprites();
}
  