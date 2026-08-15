let path;
let pathImg;
let boy;
let boyImg;
let edges;
let cashImg;
let diamondsImg;
let jwelleryImg;
let swordImg;

function preload(){
    pathImg = loadImage("Road.png");
    boyImg = loadAnimation("Runner-1.png","Runner-2.png");
    cashImg = loadImage("cash.png");
    diamondsImg = loadImage("diamonds.png");
    jwelleryImg = loadImage("jwell.png");
    swordImg = loadImage("sword.png");
}

function setup(){
    createCanvas(windowWidth,windowHeight);

    path = createSprite(width/2,200);
    path.addImage(pathImg);
    path.velocityY = 4;

    boy = createSprite(width/2,height-20);
    boy.addAnimation("run",boyImg);
    boy.scale = 0.1;
}

function draw(){
    background(0);

    if(path.y > height){
        path.y = height/2;
    }

    boy.x = World.mouseX;

    edges = createEdgeSprites();
    boy.collide(edges);

    drawSprites();
}
