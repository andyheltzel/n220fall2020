
let circSpeed;


function setup(){
    createCanvas(400,400);
}

function draw(halfSpeed){
    background("grey");
    xPos = mouseX
    yPos = mouseY
    
    circle(xPos, yPos, 20);
    
}

function halfSpeed(){
    circSpeed.speed(2)
}