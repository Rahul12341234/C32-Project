const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var ball, stand, stand1, ground, slingshot;
var box, box1, box2, box3, box4, box5, box6, box7, box8, box9;
var box10, box11, box12, box13, box14, box15, box16, box17, box18, box19;
var score = 0;
var timeImg;
var tm;

function preload(){
  getbgimg();
}

function setup() {
  createCanvas(1200,600);
  engine = Engine.create();
  world = engine.world;
  ground = new Ground(600, 590, 1200, 10)
  stand = new Ground(150, 535, 300, 100);
  stand1 = new Ground(950, 350, 250, 10);
  ball = new Ball(300, 300, 30, 30);
  slingshot = new SlingShot(ball.body, {x: 300, y: 300});
  
  box = new Box(875, 340);
  box1 = new Box(925, 340);
  box2 = new Box(975, 340);
  box3 = new Box(1025, 340);
  box4 = new Box(900, 310);
  box5 = new Box(950, 310);
  box6 = new Box(1000, 310);
  box7 = new Box(925, 260);
  box8 = new Box(975, 260);
  box9 = new Box(950, 210);
}
function draw() {
  if (timeImg)
  background(timeImg);
  Engine.update(engine);
  fill(0);
  text("Score: " + score, 750, 40);
  ground.display();
  stand.display();
  stand1.display();
  slingshot.display();
  ball.display();
  box.display();
  box1.display();
  box2.display();
  box3.display();
  box4.display();
  box5.display();
  box6.display();
  box7.display();
  box8.display();
  box9.display();
  box.score();
  box1.score();
  box2.score();
  box3.score();
  box4.score();
  box5.score();
  box6.score();
  box7.score();
  box8.score();
  box9.score();
}

function mouseDragged(){
  Matter.Body.setPosition(ball.body, {x: mouseX , y: mouseY});
}

function mouseReleased(){
  slingshot.fly(); 
}

function keyPressed(){
  if (keyCode === 32){
    slingshot.attach(ball.body);
    Matter.Body.setPosition(ball.body, {x: 300, y: 300});
    Matter.Body.setVelocity(ball.body, {x: 0, y: 0});
  }
}

async function getbgimg(){
  var response =  await fetch("http://worldtimeapi.org/api/timezone/America/New_York");
  var responseJSON = await response.json();
  var datetime = responseJSON.datetime;
  var hour = datetime.slice(11,13);
  if (hour >= 06 && hour <= 19){
      tm = "OCrVvq.jpg";
  }
  else{
      tm = "1.jpg";
  }
  timeImg = loadImage(tm);
}