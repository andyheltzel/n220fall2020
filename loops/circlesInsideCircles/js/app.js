let i = 0 

function setup() {
    createCanvas(800, 800);
}

function draw() {
    background("grey");

    noFill();
    for(var i = 0; i < 41  ; i++) {
        circle(400, 400, i * 10);
        
    }
}