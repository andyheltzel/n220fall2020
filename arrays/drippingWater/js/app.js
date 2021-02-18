let yPos = [0,0,0,0,0,0,0,0,0];

function setup() {
createCanvas(400, 400);
}

function draw() {
    background("grey");
    fill("blue")
    
    //if the frame count is evenly divisible by 10, push 0 to the end of yPos[]. I added yPos.shift so that it does not keep adding to the array and slow down the page. Though the outcome looks identical without yPos.shift as long as you add more values to yPos[].
    if(frameCount % 10 == 0) {
        yPos.push(0);
        yPos.shift()
    }

    
    //pretty self explanatory how this for loop works, made a similar note on the Snake lab (good job Andy).  yPos[i] = yPos[i] + 5 is animating the circle down the page at 5 pixels every time. 
    for(let i = 0; i < yPos.length; i++) {
        circle(200, yPos[i], 10);
        yPos[i] = yPos[i] + 5;
    }
    console.log(yPos)
}