shapePosX = [0, 40,80,120,160,200,240,280,320,360,400]
shapePosY = [0, 40,80,120,160,200,240,280,320,360,400]
colors = ["red", "green", "blue", "orange", "yellow", "pink", "brown", "black", "white", "grey", "purple"]
//The first array and second array hold the same value, but I had to use different array names because of nested loops (maybe I didn't have to do this, but it seems to work so......) The second array is obviously just to hold color values.

function setup(){
    alert("To use this program, play around with the left and right mouse buttons to see what they do. They can be pressed multiple times. Have fun! :D");
    createCanvas(400,400);
    mousePressed();
}
//I use setup to first alert the user how to use the program. I called the mousePressed() function in setup so that it runs when the site loads.

function mousePressed(){
    if(mouseButton === LEFT){
        background(colors.reverse())
        drawRect();
        
    }
    if(mouseButton === RIGHT){
        background(colors);
        drawCirc();
    }
}
//This is the mousePressed() function. If the left mouse button is pressed, it will call the drawRect() function and color the background the reverse of colors[]
//If the right mouse button is pressed, it initiates the drawCirc() function and colors the background the colors[]

function drawRect(){
   for(y = 0; y < shapePosY.length; y++){
    for(i = 0; i < shapePosX.length; i++){
        noStroke();
        fill(colors[i]);
        rect(shapePosX[i], shapePosY[y], 35, 35);
    }
   }
}
//This contains a nested for loop, I did this because if I just use one loop with the same array it creates a diagonal line instead of a grid of shapes like I wanted. 

function drawCirc(){
   for(y = 0; y < shapePosY.length; y++){
    for(i = 0; i < shapePosX.length; i++){
        noStroke();
        fill(colors.reverse()[i]);
        circle(shapePosX[i], shapePosY[y], 20);
    }
   }
}
//Pretty much works exactly the same as drawRect() except this one draws circles.