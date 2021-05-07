var bubble,bubble1;
var edges;
var r,g,b;
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function setup() {
  createCanvas (600,600);
  engine = Engine.create();
	world = engine.world;
 bubble1 = new Bubble(200,200,"red");
 bubble = new Bubble(400,200,"green");
 bubble2 = new Bubble(200,200,"blue");
 bubble3 = new Bubble(300,200,"yellow");
 
 top1 = new Border(300,10,600,10);
 left1 = new Border(10,300,10,600);
 right1 = new Border(590,300,10,600);
 bottom1 = new Border(300,590,600,10);



}
function draw() {
  background("black");
  Engine.update(engine);
bubble.display();
bubble1.display();
bubble2.display();
bubble3.display();

top1.display();
left1.display();
right1.display();
bottom1.display();
if (changeColor(bubble1,bubble)||changeColor(bubble2,bubble3)||changeColor(bubble1,bubble3)||changeColor(bubble2,bubble)) {
  bubble.color = rgb(random(0,255),random(0,255),random(0,255));
  bubble1.color = rgb(random(0,255),random(0,255),random(0,255));
  bubble2.color = rgb(random(0,255),random(0,255),random(0,255));
  bubble3.color = rgb(random(0,255),random(0,255),random(0,255));

}
}

function keyPressed(){
  if (keyCode === 32) {
    var num = random (-8,8);
    var num1 = random (-8,8);
    var num2 = random (-8,8);
    var num3 = random (-8,8);
    
    Matter.Body.setVelocity(bubble.body,{x:num,y:num2})
    Matter.Body.setVelocity(bubble1.body,{x:num3,y:num1})
    Matter.Body.setVelocity(bubble2.body,{x:num3,y:num1})
    Matter.Body.setVelocity(bubble3.body,{x:num3,y:num1})
  
  }
}
function changeColor(obj1,obj2) {
var objectPosition = obj1.body.position
var objectPosition1 = obj2.body.position
var distance = dist(objectPosition.x,objectPosition.y,objectPosition1.x,objectPosition1.y)
  if (distance<=obj1.r+obj2.r) {
   return true; 
  }
}