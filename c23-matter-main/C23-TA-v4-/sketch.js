//Namespacing
const Engine = Matter.Engine
const World = Matter.World
const Bodies = Matter.Bodies
const Body = Matter.Body

var engine, world;
var ball;

function setup() {
    createCanvas(400,400);

    engine = Engine.create()
    world = engine.world
   
    var ball_options= {
        restitution:1, 
        airFriction : 0.01
    }

   
    var ground_options ={
      isStatic:true,
    }

    ball = Bodies.circle(100,10,20,ball_options);
    World.add(world,ball);

    

    ground = Bodies.rectangle(200,390,400,20,ground_options);
    world.add(world,ground);

    
}

function draw() 
{
  background(51);
  Engine.update(engine);
  rectMode(CENTRE)
    ellipse(RADIUS)
    fill("brown")
  
  ellipse(ball.position.x, ball.position.y, 20);
  rect(ground.position.x,ground.position.y,400,20);
}

