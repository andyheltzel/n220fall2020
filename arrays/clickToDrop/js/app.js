i = 30

yPos = [35,40,45,50,55,60,65,70,75,80,85,90,95,100]

function setup(){
    createCanvas(800, 800);
}

function draw(){
    background("green");
    
    if(mouseIsPressed){
        // i++;
        // translate(400, yPos[3]);
        rect(400, yPos.length, 20, 20);
    }

    rect(400, 30, 20, 20);

    // console.log(yPos);

}