const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var canvas;

var computerbase;
var playerbase;
var Player;
var computer;


function setup() {
  canvas = createCanvas(windowWidth, windowHeight);
  
   //Initialising Engine
  engine = Engine.create();
  world = engine.world;
	
   //Create Player Base and Computer Base Object
   computerbase = new computerBase(150, 500, 160, 310);
   playerbase = new playerBase(800,500,160,310)
   Player = new player(155,330,100,100);
   computer = new player(800,330,100,100);
  


 }

function draw() {

  background(180);

  Engine.update(engine);

  // Title
  fill("#FFFF");
  textAlign("center");
  textSize(40);
  text("EPIC ARCHERY", width / 2, 100);

   //Display Playerbase and computer base 
   computerbase.display();
   playerbase.display();


   //display Player and computerplayer
   Player.display();
   computer.display();


}
