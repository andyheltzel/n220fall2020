xPos = 0

function setup() {
    createCanvas(800, 600);
}

function draw() {

    background("yellow");

    xPos = xPos + 5
    if(xPos == 800) {
        xPos = 0
    }
    fill("orange");
    circle(xPos,400,40)

}