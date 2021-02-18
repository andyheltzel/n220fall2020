traceX = [0,0,0,0,0,0,0,0,0,0]
traceY = [0,0,0,0,0,0,0,0,0,0]


function setup(){
    createCanvas(400, 400);
}

function draw(){

    background(157, 2, 8);

    //I figured out that I needed two sets of .push and .shift for x and y positions.
    traceX.push(mouseX);
    traceX.shift();
    traceY.push(mouseY);
    traceY.shift();

    //i only need traceX.length for the conditional because both arrays are the same length, so it would work the same regardless. 
    for(var i = 0; i < traceX.length; i++){
        fill(255, 186, 8);
        circle(traceX[i], traceY[i], 20);
    }

    console.log(traceX.length);

}