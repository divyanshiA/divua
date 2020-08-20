
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render=Matter.Render;
var dustbino,papero,groundo;
var world;


function preload()
{
	
}

function setup() {
	createCanvas(1600, 700);
 rectMode(CENTER);

	engine = Engine.create();
	world = engine.world;
	dustbino=new Dustbin(1200,650);
	papero=new Paper (200,450,40);
	groundo=new Ground(width/2,670,width,20);


	var render = Render.create({
		element: document.body,
		engine: engine,
		options: {
		  width: 1200,
		  height: 700,
		  wireframes: false
		}
	  });
  
	


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  papero.display();
  dustbino.display();
  groundo.display();

  
  drawSprites();
 
}
function keyPressed(){
	if (keyCode===UP_ARROW){
		Matter.Body.applyForce(papero.body,papero.body.position,{x:85,y:-85});
	}
}


