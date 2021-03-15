var xPos = 180;
var yPos = 180;
var xSpeed = 3;
var ySpeed = 1;
var r = 35;


var paddle = {
  hght : 100,
  wdth : 20,
  color : "red",
  createPaddle: function() {
    background(220);
    fill(this.color);
    rect(350, mouseY, this.wdth, this.hght);
}
}

var ball = {
  xPos : 180,
  yPos : 180,
  xSpeed : 3,
  ySpeed : 1,
  r : 35,
  createBall: function(){
    circle(this.xPos, this.yPos, this.r);
  if(this.xPos > width || this.xPos < -1) {
    this.xSpeed = -this.xSpeed
  }
  
  this.xPos = this.xPos + this.xSpeed;
  
  if(this.yPos > width || this.yPos < -1) {
    this.ySpeed = -this.ySpeed
  }
  
  this.yPos = this.yPos + this.ySpeed;
  }
}

function hitTestPoint(){
  
}

function setup() {
  createCanvas(400, 400);
   background(220);

}

function draw() {
 paddle.createPaddle();
  ball.createBall();
  
}
