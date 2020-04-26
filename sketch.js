var helicopterIMG, helicopterSprite, packageSprite,packageIMG;
var packageBody,ground,ei;
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
function preload()
{
	helicopterIMG=loadImage("helicopter.png")
	packageIMG=loadImage("package.png")
}

function setup() {
	createCanvas(800, 700);
	rectMode(CENTER);
	

	packageSprite=createSprite(width/2, 80, 10,10);
	packageSprite.addImage(packageIMG)
	packageSprite.scale=0.2

	helicopterSprite=createSprite(width/2, 200, 10,10);
	helicopterSprite.addImage(helicopterIMG)
	helicopterSprite.scale=0.6

	groundSprite=createSprite(width/2, height-35, width,10);
	groundSprite.shapeColor=color(255)


	engine = Engine.create();
	world = engine.world;

	packageBody = Bodies.circle(width/2 , 200 , 5 , {restitution:0.6, isStatic:true});
	World.add(world, packageBody);
	

	//Create a Ground
	ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
 	World.add(world, ground);

	
	packageSprite_options = {
        
        friction:5,
	}
	
	Engine.run(engine);
  ei=0;
}


function draw() {
  rectMode(CENTER);
  background(0);
  
  packageSprite.y= packageBody.position.y 
  if (keyDown("left") && helicopterSprite.x>120) {
	  helicopterSprite.x=helicopterSprite.x-5;
	  if (ei==0){
		packageSprite.x=packageSprite.x-5;
	}
  }
  if (keyDown("right") && helicopterSprite.x<680){
	helicopterSprite.x=helicopterSprite.x+5;
	if (ei==0){
		packageSprite.x=packageSprite.x+5;
	}
	
}
if (keyDown("space")) {
	Matter.Body.setStatic(packageBody,false);
	ei=1;
	}
	if (ei==1){
		textSize(30);
		fill("green");
		strokeWeight(3);
		text("Mission Succesful",300,350);
		strokeWeight(0);
	}
  drawSprites();
 
}

function keyPressed() {
 
}



