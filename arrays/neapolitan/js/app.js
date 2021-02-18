//defining the arrays
colors = ["red" , "green" , "blue"]
rectPos = [0,200,400]

function setup(){
    createCanvas(600, 200);    

    //i increments through each array value. Therefor it creates each rectangle in the spot I need it in. The colors array does exactly the same thing as rectPos but assigns them each a color.
    for(i = 0; i < rectPos.length; i++) {
        // console.log(rectPos[i]);
        fill(colors[i]);
        noStroke()
        rect(rectPos[i], 0, 200, 200);
    }

    
}

