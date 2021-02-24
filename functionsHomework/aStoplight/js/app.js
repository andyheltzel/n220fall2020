colors = ["red", "yellow", "green"]
circPos = [40, 60, 80]
//I created these arrays in almost the same fashion as the Neapolitan task last week. These fit almost the same criteria. One array for color and one for position. Since I needed only to assign one color per circle, it worked out great.


function setup(){
    createCanvas(400,400);
    background("grey");
}
//self explanatory


function draw(){
    fill("black");
    rect(150,80,100,200);
    for(i = 0; i < colors.length; i++) {
        fill(colors[i]);
        noStroke()
        circle(200, circPos[i]*3, 20);
    }
}
//I created the rectangle outside of the loop because there is only one and it was not going to repetitive work. The for loop is basically just incrementing for the length of the colors array (i could have used either array to increment since the length of each is the same). The circPos[i]*3 is just taking the 0,1,2 value in the array and multiplying it by three to increase the distance between the circles (I did not really need to do this, but I was lazy and decided it would be easier than changing the values in the array individually.)