function setup() {
    createCanvas(800, 800);
    fill("red");
    noStroke();
    for(var x = 0; x < 4; x++) { 
            for(var y = x; y < 4; y++){
            rect(41 * x, y * 41, 40, 40);
            }
        } 
    }