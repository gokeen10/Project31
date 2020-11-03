const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine;
var world;

var ground1, ground2, ground3, ground4, ground5, ground6, ground7, ground8, ground9;

var plinko1, plinko2, plinko3, plinko4, plinko5, plinko6, plinko7, plinko8, plinko9, plinko10, plinko11, plinko12, plinko13, plinko14;
var particle1, particle2, particle3, particle4;



function preload() {

}

function setup() {
  var canvas = createCanvas(480, 800);
  engine = Engine.create();
  world = engine.world;
  
  ground1=new Ground(470, 400, 900, 20);

  ground2=new Ground();
  ground3=new Ground();
  


}

var particles = [];
var plinkos = [];
var divisions = [];

var divisionHeight=300;

function draw() {
  background(canvas); 
  
  for (var k = 0; k<=width; k = k+80) {
    divisions.push(new Divisions(k, height-divisionHeight/2, 10, divisionHeight));
  }

  for (var j = 40; j<=width; j=j+50) {
    plinkos.push(new Plinko(j, 75));
  }

  for (var j = 15; j <=width-10; j=j+50) {
    plinkos.push(new Plinko(j,175));
  }

  for (var j = 0; j < particles.length; j++) {
    particles[j].display();
  }

  for (var k = 0; k < divisions.length; k++) {
    divisions[k].display();
  }

  if(frameCount%60===0) {
    particles.push(new Particle(random(width/2-10, width/2+10), 10, 10));
  }

  ground1.display();

  divider1.display();
  divider2.display();
  divider3.display();
  divider4.display();
  divider5.display();
  divider6.display();
  divider7.display();

  plinko1.display();
  plinko2.display();
  plinko3.display();
  plinko4.display();
  plinko5.display();
  plinko6.display();
  plinko7.display();
  plinko8.display();
  plinko9.display();
  plinko11.display();
  plinko12.display();
  plinko13.display();
  plinko14.display();

  particle1.display();
  particle2.display();
  particle3.display();
  particle4.display();

  drawSprites();
}