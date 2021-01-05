
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var tree,ground,mango,mango1,mango2,mango3,mango4,mango5,mango6,mango7,mango8,mango9;
var boy,stone
var gameState = "onSling";
function preload()
{
	
}

function setup() {
	createCanvas(1200, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
tree=new Tree(900,450);
ground=new Ground(600,690,1200,20);
mango=new Mango(910,410,10)
stone=new Stone(350,200,10)
mango1=new Mango(945,300,10)
mango2=new Mango(954,390,10)
mango3=new Mango(950,360,10)
mango4=new Mango(960,345,10)
mango5=new Mango(850,310,10)
mango6=new Mango(975,220,10)

boy=new SlingShot(stone.body,{x:450,y:612})

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("grey");
  tree.display();
  ground.display();
  mango.display();
  mango1.display();
  mango2.display();
  mango3.display();
  mango4.display();
  mango5.display();
  mango6.display();

  stone.display();
  boy.display();
  detectollision(stone,mango)
  detectollision(stone,mango1)
  detectollision(stone,mango2)
  detectollision(stone,mango3)
  detectollision(stone,mango4)
  detectollision(stone,mango5)
  detectollision(stone,mango6)
  
  /*if(stone.x-mango.x<(mango.width+stone.width/2)){
    Matter.Body.setStatic(mango.body,false);
  }
  if(stone.x-mango1.x<(mango1.width+stone.width/2)){
    Matter.Body.setStatic(mango1.body,false);
  }
  if(stone.x-mango2.x<(mango2.width+stone.width/2)){
    Matter.Body.setStatic(mango2.body,false);
  }
  if(stone.x-mango3.x<(mango3.width+stone.width/2)){
    Matter.Body.setStatic(mango3.body,false);
  }
  if(stone.x-mango4.x<(mango4.width+stone.width/2)){
    Matter.Body.setStatic(mango4.body,false);
  }
  if(stone.x-mango5.x<(mango5.width+stone.width/2)){
    Matter.Body.setStatic(mango5.body,false);
  }
  if(stone.x-mango6.x<(mango6.width+stone.width/2)){
    Matter.Body.setStatic(mango6.body,false);
  }
 */

  drawSprites();
 
}
function mouseDragged(){
  if (gameState!=="launched"){
      Matter.Body.setPosition(stone.body, {x: mouseX , y: mouseY});
  }
}


function mouseReleased(){
  boy.fly();
  gameState = "launched";
}

function keyPressed(){
  if(keyCode === 32&&gameState==="launched"){
     Matter.Body.setPosition(stone.body, {x: 70 , y: 612});

     boy.attach(stone.body);
    
     gameState="onSling"
  }
}
function detectollision(lstone,lmango){
	
  mangoBodyPosition=lmango.body.position
  stoneBodyPosition=lstone.body.position
  
  var distance=dist(stoneBodyPosition.x, stoneBodyPosition.y, mangoBodyPosition.x, mangoBodyPosition.y)
  //console.log(distance)
  	if(distance<=stone.radius+mango.radius)
    {
      
      console.log("hi")  
  	  Matter.Body.setStatic(lmango.body,false);
    }

  }
 