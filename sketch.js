
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var engine, world, ground1, ball1;

function preload()
{
	
}

function setup() {
	createCanvas(800, 800);


	engine = Engine.create();
	world = engine.world;
	
	var options={

		isStatic:true
	  }
	
	 
	
	//Create the Bodies Here.
	bas1= new Baskit(650,680,180,20);
	bas2= new Baskit(550,630,20,120);
  
	bas3= new Baskit (750,630,20,120);
	
	ball1=new ball (250,600,10)
    ground1=new ground(400,700,800,10)
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  
  bas1.display();
  bas2.display();
  bas3.display();
  
 

  ball1.display()
  ground1.display()
if(keyWentDown("UP_ARROW")){

Matter.Body.applyForce(ball1.body,ball1.body.position,{x:19,y:-12})


}



 
}



