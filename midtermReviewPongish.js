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

function setup() {
  createCanvas(400, 400);
   background(220);
}

function draw() {
 paddle.createPaddle();
}
