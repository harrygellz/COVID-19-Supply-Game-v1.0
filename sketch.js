var backgroundIMG;
var housesIMG;
var witchdocIMG;
var sidewalkIMG;

var player;


function preload() {
    townIMG = loadImage("../assets/background1.png");
    witchdocIMG = loadImage("../assets/plague doctor player.png");
    sidewalkIMG = loadImage("assets/gamesidewalk.png");
    housesIMG = loadImage("assets/housesbackground.png");
    toiletpIMG = loadImage("assets/tpvector.png");
    titleIMG = loadImage("COVID-19 game title.png");
    
}

function setup() {
    createCanvas(750,450);
    player = new player();
    
    background(66, 206, 245);
}

function draw() {
    background(0,100,190);
    
//Camera controls
    camera.position.x = player.position.x;
    camera.position.y = 225;
    camera.zoom = 1.0;
      
//Background vectors
    image(townIMG, -375, 0, 0, 0);
    fill(133,133,133);
    rect(-375,293,750,360);
    fill(0,255,0);
    rect(-375,300,5000,360);
    image(housesIMG, 100, -5, 0, 0);
    fill(255,0,0);
    rect(-375,335,5000,200);    
    image(sidewalkIMG, -375, 20, 0, 0);
    
}