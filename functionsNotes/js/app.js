let sunX = 40

function setup() {
    createCanvas(400, 300);
   
    

}

function draw(){
    background("grey");
    sunX ++;
    drawSun("#ffcb3d" , 20 , mouseY , mouseX);

}


function drawSun(sunColor , numRays , yHeight, xHeight) {


    console.log(sunColor);
    fill(sunColor);
    stroke(sunColor);
    
    for(var i = 0; i < numRays; i++) {
        line(xHeight,yHeight, i * 20, 300);
    }
    
    circle(xHeight, yHeight , 40);

    
}

console.log("Hello from the other side");

//function definition
function sayHello() {
    console.log("Hello inside");
}

//run function?
sayHello();