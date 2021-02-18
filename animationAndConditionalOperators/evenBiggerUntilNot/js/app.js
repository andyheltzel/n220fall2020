sizeInc = 1
// canvas = (400,400)

function setup() {

    createCanvas(400, 400);

}

function draw() {

    background("black");

    sizeInc = sizeInc + 1
    if(sizeInc > 200) {
        sizeInc = 1
    }
    fill("yellow");
    circle(200,200,sizeInc);

    // console.log(sizeInc);
}