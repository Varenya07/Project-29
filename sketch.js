const Engine = Matter.Engine
const World = Matter.World
const Bodies = Matter.Bodies
const Body = Matter.Body
const Constraint = Matter.Constraint

var engine, world
var platform1, platform2
var block1 
var block2
var block3 
var block4 
var block5 
var block6 
var block7 
var block8 
var block9 
var block10 
var block11 
var block13 
var block14 
var block15 
var block16 
var block17 
var block18 
var block19 
var block20
var block21
var block22
var block23
var block24
var block25
var slingshot

function preload() {
    polygonpic = loadImage("polygon.png")
}

function setup() {
    var canvas = createCanvas(1200,700)

    engine = Engine.create();
    world = engine.world

    platform1 = new Platform(450,600,280,20)
    platform2 = new Platform(900,300,200,20)

block1 = new Block(330,570,40,40)
 block2 = new Block(370,570,40,40)
 block3 = new Block(410,570,40,40)
 block4 = new Block(450,570,40,40)
 block5 = new Block(490,570,40,40)
 block6 = new Block(530,570,40,40)
 block7 = new Block(570,570,40,40)
 block8 = new Block(370,540,40,40)
 block9 = new Block(410,540,40,40)
 block10 = new Block(450,540,40,40)
 block11 = new Block(490,540,40,40)
 block12 = new Block(530,540,40,40)
 block13 = new Block(410,510,40,40)
 block14 = new Block(450,510,40,40)
 block15 = new Block(490,510,40,40)
 block16 = new Block(450,480,40,40)
 block17 = new Block(820,270,40,40)
 block18 = new Block(860,270,40,40)
 block19 = new Block(900,270,40,40)
 block20 = new Block(940,270,40,40)
 block21 = new Block(980,270,40,40)
 block22 = new Block(860,240,40,40)
 block23 = new Block(900,240,40,40)
 block24 = new Block(940,240,40,40)
 block25 = new Block(900,210,40,40)

 polygon = Bodies.circle(100,400,20)
 World.add(world,polygon)
 
 slingshot = new Slingshot(polygon,{x:150,y:395})

}

function draw() {
    background(235)
    Engine.update(engine)
    platform1.display();
    platform2.display();
    block1.display();
    block2.display();
    block3.display();
    block4.display();
    block5.display();
    block6.display();
    block7.display();
    block8.display();
    block9.display();
    block10.display();
    block11.display();
    block12.display();
    block13.display();
    block14.display();
    block15.display();
    block16.display();
    block17.display();
    block18.display();
    block19.display()
    block20.display()
    block21.display()
    block22.display();
    block23.display();
    block24.display();
    block25.display();

    imageMode (CENTER)
    image(polygonpic,polygon.position.x,polygon.position.y,60,60)
    slingshot.display();

    drawSprites();
}
function mouseDragged() {
   Matter.Body.setPosition(polygon,{x: mouseX,y: mouseY})
}
function mouseReleased() {
    slingshot.fly();
}