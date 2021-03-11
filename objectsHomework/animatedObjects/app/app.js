let objectProp = [
    {
        xPos : 20,
        yPos : 20,
        r : 1,
    },
    {
        xPos : 30,
        yPos : 30,
        r : 5,
    },
    {
        xPos : 40,
        yPos : 40,
        r : 11,
    },
    {
        xPos : 50,
        yPos : 50,
        r : 16,
    },
    {
        xPos : 60,
        yPos : 60,
        r : 21,
    }
]


function setup(){
    createCanvas(400,400);
    console.log(objectProp[1]);
}

function draw(){
    for(i = 0 ; i < objectProp.length ; i++){
        objectProp[i].xPos += 1
        objectProp[i].yPos += 1
        objectProp[i].r += 1
        circle(objectProp[i].xPos * 4, objectProp[i].yPos * 4, objectProp[i].r);
    }    
}