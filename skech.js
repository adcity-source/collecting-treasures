let path;
let pathImg;
let boy;
let boyImg;
let edges;
let cashImg;
let diamondsImg;
let jwelleryImg;
let swordImg;
let cashGroup;
let diamondsGroup;
let jwelleryGroup;
let swordGroup;
let endImag;
const PLAY = 1;
const END = 0;
let gameState = PLAY; 
let tresureCollection = 0;

function preload(){
    pathImg = loadImage("Road.png");
    boyImg = loadAnimation("Runner-1.png","Runner-2.png");
    cashImg = loadImage("cash.png");
    diamondsImg = loadImage("diamonds.png");
    jwelleryImg = loadImage("jwell.png");
    swordImg = loadImage("sword.png");
    endImag = loadImage("fimdejogo.png");
}

function setup(){
    createCanvas(windowWidth,windowHeight);

    path = createSprite(width/2,200);
    path.addImage(pathImg);
    path.velocityY = 4;

    boy = createSprite(width/2,height-20);
    boy.addAnimation("run",boyImg);
    boy.scale = 0.1;

    cashGroup = new Group();
    diamondsGroup = new Group();
    jwelleryGroup = new Group();
    swordGroup = new Group();
}

function draw(){
    background(0);

    if(gameState === PLAY){
        if(path.y > height){
            path.y = height/2;
        }

        boy.x = World.mouseX;
        edges = createEdgeSprites();
        boy.collide(edges);
        createCash();
        createDiamonds();
        createJwellery();
        createSword();

        if(cashGroup.isTouching(boy)){
            cashGroup.destroyEach();
            tresureCollection += 50;
        }
        else if(diamondsGroup.isTouching(boy)){
            diamondsGroup.destroyEach();
            tresureCollection += 100;
        }
        else if(jwelleryGroup.isTouching(boy)){
            jwelleryGroup.destroyEach();
            tresureCollection += 150;
        }
        else if(swordGroup.isTouching(boy)){
            gameState = END
            boy.addAnimation("run",endImag);
            boy.x = width/2;
            boy.y = height/2;
            boy.scale = 0.6;
            cashGroup.destroyEach();
            diamondsGroup.destroyEach();
            jwelleryGroup.destroyEach();
            swordGroup.destroyEach();
            cashGroup.setVelocityYEach(0);
            diamondsGroup.setVelocityYEach(0);
            jwelleryGroup.setVelocityYEach(0);
            swordGroup.setVelocityYEach(0);

        }
    }


    
    

    drawSprites();

    textSize(20);
    fill(255);
    text("tesouros: "+ tresureCollection,width - 200,30);
}

function createCash(){
    if(World.frameCount % 200 == 0){

        let cash = createSprite(Math.round(random(50,width - 50),40,10,10));
        cash.addImage(cashImg);
        cash.scale = 0.12;
        cash.velocityY = 5;
        cash.lifetime = 5 / height;
        cashGroup.add(cash);
    }
}

function createDiamonds(){
    if(World.frameCount % 320 == 0){
        let diamonds = createSprite(Math.round(random(50,width - 50),40,10,10));
        diamonds.addImage(diamondsImg);
        diamonds.scale = 0.03;
        diamonds.velocityY = 5;
        diamonds.lifetime = 5 / height;
        diamondsGroup.add(diamonds);
    }
}

function createJwellery(){
    if(World.frameCount % 410 == 0){
        let jwellery = createSprite(Math.round(random(50,width - 50),40,10,10));
        jwellery.addImage(jwelleryImg);
        jwellery.scale = 0.13;
        jwellery.velocityY = 5;
        jwellery.lifetime = 5 / height;
        jwelleryGroup.add(jwellery);
    }
}

function createSword(){
    if(World.frameCount % 530 == 0){
        let sword = createSprite(Math.round(random(50,width - 50),40,10,10));
        sword.addImage(swordImg);
        sword.scale = 0.1;
        sword.velocityY = 4;
        sword.lifetime = 5 / height;
        swordGroup.add(sword);
    }
}