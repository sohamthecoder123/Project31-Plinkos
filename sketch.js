
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
//const Constraint = Matter.Constraint;
//THE COLOR CODE : 2, 73, 94
//the second color code : 94, 73, 52
var ground1;

var particles = [];
var plinkos = [];
var divisions = [];

var divisionHeight = 300;
function setup() {
  createCanvas(480, 800);
  rectMode(CENTER);

  engine = Engine.create();
  world = engine.world;

  //createSprite(400, 200, 50, 50);
  ground1 = new Ground(width/2, height-5, width, 10);

  Engine.run(engine);
}

function draw() {
  rectMode(CENTER);
  background(0);  
  fill("white");
  textSize(60);
  text("Plinkos!!!", width/4, height/2+50);
  textSize(20);
  text("Use mouse to play", 160, height/2+80);
  ground1.display();
  //drawSprites();
  
  for (var d = 0; d <= width; d = d + 80){
    divisions.push(new Division(d, height-divisionHeight/2, 10, divisionHeight));
  }

  for (var p = 40; p <= width; p = p + 50){
    plinkos.push(new Plinko(p, 75, 10));
  }

  for (var p = 15; p <= width-10; p=p+50){
    plinkos.push(new Plinko(p, 175, 10))
  }

  for (var p = 40; p <= width; p=p+50){
    plinkos.push(new Plinko(p, 275, 10));
  }

  for (var p = 15; p <= width-10; p=p+50){
    plinkos.push(new Plinko(p, 375, 10));
  }

  if(frameCount%90===0){
    particles.push(new Particle(mouseX, 10, 10));
  }

  for (var j = 0; j < particles.length; j++){
    particles[j].display();
  }

  for (var k = 0; k < divisions.length; k++){
    divisions[k].display();
  }

  for (var l = 0; l < plinkos.length; l++){
    plinkos[l].display();
  }
}