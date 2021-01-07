const Engine=Matter.Engine;
const World=Matter.World;
const Bodies=Matter.Bodies;
var engine,world;
var ground;
var ball;
function setup() {
  createCanvas(400,400);
  engine=Engine.create();
  world=engine.world;
  var groundOption={
    isStatic:true
  }
  var ballOption={
    restitution:1.0
  }
  ground=Bodies.rectangle(200,380,200,30,groundOption);
  World.add(world,ground);
  ball=Bodies.circle(200,100,20,ballOption);
  World.add(world,ball);
  console.log(ground);


}

function draw() {
  background(0);  
  Engine.update(engine);
  rectMode(CENTER);
  rect(ground.position.x,ground.position.y,400,40);
  ellipseMode(RADIUS);
  ellipse(ball.position.x,ball.position.y,20,20);
}