const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
//var engine, world
var score=0;
var bg="light.jpg";
var backgroundImg;

function preload(){
light = loadImage("light.jpg");
}

function setup() {
  createCanvas(800,400);
  engine= Engine.create();
  world= engine.world;
  
  ground=new Ground(800,height,1600,20);
  ground2= new Ground(500,300,230,10);
  ground3= new Ground(700,150,150,10);

  block1 = new Block(410,275,30,40);
  block2 = new Block(440,275,30,40);
  block3 = new Block(470,275,30,40);
  block4 = new Block(500,275,30,40);
  block5 = new Block(530,275,30,40);
  block6 = new Block(560,275,30,40);
  block7 = new Block(590,275,30,40);
 
  block8 = new Block(440,235,30,40);
  block9 = new Block(470,235,30,40);
  block10 = new Block(500,235,30,40);
  block11 = new Block(530,235,30,40);
  block12 = new Block(560,235,30,40);

  block13 = new Block(470,195,30,40);
  block14 = new Block(500,195,30,40);
  block15 = new Block(530,195,30,40);
  
  block16 = new Block(500,155,30,40);

  block17= new Block(650,128,25,35);
  block18= new Block(675,128,25,35);
  block19= new Block(700,128,25,35);
  block20= new Block(725,128,25,35);
  block21= new Block(750,128,25,35);

  block22= new Block(675,93,25,35);
  block23= new Block(700,93,25,35);
  block24= new Block(725,93,25,35);

  block25= new Block(700,58,25,35);

  square=new Square(150,200,45);
  drag= new Drager(square.body,{x:150,y:100});
}

function draw() {
  background("white");  
  Engine.update(engine);
 ground.display();
 ground2.display();
 ground3.display();
 
 textSize(30);
 text("score:"+score,20,20);

 fill("purple");
 block1.display();
 block2.display();
 block3.display();
 block4.display();
 block5.display();
 block6.display(); 
 block7.display();
 fill("violet");
 block8.display();
 block9.display();
 block10.display();
 block11.display();
 block12.display();
 fill("pink");
 block13.display();
 block14.display();
 block15.display();
 fill("white");
 block16.display();
 fill("purple");
 block17.display();
 block18.display();
 block19.display();
 block20.display();
 block21.display();
 fill("violet");
 block22.display();
 block23.display();
 block24.display();
 fill("pink");
 block25.display();
 square.display();
 drag.display();

 block1.score();
 block2.score();
 block3.score();
 block4.score();
 block5.score();
 block6.score();
 block7.score();
 block8.score();
 block9.score();
 block10.score();
 block11.score();
 block12.score();
 block13.score();
 block14.score();
 block15.score();
 block16.score();
 block17.score();
 block18.score();
 block19.score();
 block20.score();
 block21.score();
 block22.score();
 block23.score();
 block24.score();
 block25.score();
 
}
function mouseDragged(){
  Matter.Body.setPosition(square.body,{x:mouseX,y:mouseY});
}
function mouseReleased(){
  drag.fly();
}
function keyPressed(){
  if(keyCode===32){
      drag.attach(square.body);
  }
}
