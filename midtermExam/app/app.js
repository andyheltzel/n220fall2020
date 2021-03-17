yPos = [0,0,0,0,0,0,0,0,0,0]
//Holds values so that there are always 10 circles

xPos = 200
//I guess I don't really need a variable for this, but I made it anyways.

secondY = 1;
//This variable is used so that I can animate the circles moving when the mouseIsPressed



function setup(){
    createCanvas(400,400);
}

function draw(){
    yPos.push(mouseY);
    yPos.shift();
    //These two make a trailing effect so that each of the 10 circles are following the mouse. 
    
    background(200);
    //Background is here so that it does a refreshing effect with each time draw is run.

    colors = [mouseY, 164,50]
    //The first value follows the Y position of the mouse so that it changes the RGB color depending on position.
    r = mouseY/5 
    //Makes the circles bigger according to Y position. The closer to the x-axis the smaller they get.
    
    if(mouseIsPressed){
        //this if statement basically animates the circles downward at a rate of 5 pixels/s when either mouse button is pressed.
        secondY = secondY + 5;
        if(secondY > 400){
            secondY = 0;
        }
        fill(colors);
        circle(xPos, secondY, r); 
    }else{
        //this makes the 10 circles follow the mouse any time that the buttons are not pressed.
        for(i = 0; i < yPos.length; i++){
        fill(colors);
        circle(xPos, yPos[i], r);  
        }
        
    }

    

}