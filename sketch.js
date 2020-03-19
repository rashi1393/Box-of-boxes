const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
 
var engine;
var world;
 
var ground;
var gSlider;
var boxes = [];
  
function setup() {
    createCanvas(400, 400);
    engine = Engine.create();
    world = engine.world;
    
    gSlider = createSlider(0, 100, 50);
    gSlider.position(40, 365);
    
    ground = new Ground(200,340,400,20);
}
  
function draw() {
    Engine.update(engine);
    background(51);
    var fVal = gSlider.value();
    
    fill(255);
    textSize(15);
    text("Gravity " + fVal, 200, 381);

    ground.display();
    for (var i = 0; i < boxes.length; i++) {
        boxes[i].display();
    }
}

function mousePressed(){
    if(mouseY < 330){
        boxes.push(new Box(mouseX, mouseY, random(10,50),random(10,90)));        
    }
}

 