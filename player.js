var player;
var gravity = 10;
var velocity = 5;
//var handsan;
var mask;
//var toiletp;
var score = 0;

function setup() {
  createCanvas(750, 450);
    
//Create masks, tp, and handsan sprites
mask = new Group();
    x= 170;
  for (var i = 0; i < 50; i++) {
    var c = createSprite(x, 280, 20, 20);
      x+= 285;
    c.addImage(toiletpIMG);
    mask.add(c);
  }

//Create Player Sprite
  player = createSprite(
    0, 325, 40, 40);
  player.addImage(witchdocIMG);

//Create Ground Sprite
    noFill();
    groundspr = createSprite(
  0,  350, 9000, 0);
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
    
//Title
   // image(titleIMG, 375, 225);
    
//gravity
   player.velocity.y = gravity;
    
// Keyboard Controls
  if (keyIsDown(LEFT_ARROW)) {
    player.position.x -= 5;
  }
  if (keyIsDown(RIGHT_ARROW)) {
     player.position.x += 5;
  }
  if (keyIsDown(UP_ARROW)) {
     player.position.y -= 15;
      player.velocity.y = 5; 
  }

//Ground collide
    player.collide(groundspr);
    
 //Collision callback
    player.overlap(mask, getCoin);
    drawSprites();
    fill(255);
    noStroke();
    textSize(72);
    textAlign(0, 100);
    if (mask.length > 0) {
    text(score, player.position.x - 20, 420);
}
    else {
    text("you win!", width/2, height/2);
    }
}
function getCoin(player, mask) {
  mask.remove();
  score += 1;
}