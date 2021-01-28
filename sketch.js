
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var stone, hammer, rubber, ground;
function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

stone = new Stone(200, 200, 30, 30);
rubber = new Rubber(500, 200, 30, 30);
hammer = new Hammer(100, 450, 40, 20);
ground = new Ground (400, height, 1200, 20);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  stone.display();
  rubber.display();
  hammer.display();
  ground.display();
  drawSprites();
 
}



