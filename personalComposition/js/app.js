function setup() {
    createCanvas(400, 400);
    
  }
  
  function draw() {
    background(200);
    strokeWeight(5);
    noFill();
    var x = 50;
    var y = x + 50;
    
    stroke(0, 133, 199);
    ellipse(50, x,80,80);
    
    stroke("black");
    ellipse(150, x,80,80);
    
    stroke(223, 0, 36);
    ellipse(250, x,80,80);
    
    stroke(244, 195, 0);
    ellipse(100, y,80,80);
    
    
    stroke(0, 159, 61);
    ellipse(200, y,80,80);
    
 

  }