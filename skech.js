let path;
let pathImg;

function preload(){
    pathImg = loadImage("Road.png");
}

function setup(){
    createCanvas(windowWidth,windowHeight);
    path = createSprite(width/2,200);
    path.addImage(pathImg);
}

function draw(){
    background(0);
    drawSprites();
}
