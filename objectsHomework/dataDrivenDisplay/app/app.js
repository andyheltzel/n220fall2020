
var objectProp = {
    xPos: 200,
    yPos: 200,
    wdth: 100,
    hght: 100,
    color: [54, 30, 69],
    boundaries: 400,
    create: function(){
        fill(this.color);
        rect(this.xPos,this.yPos, this.wdth, this.hght);
    }
}

function setup(){
    createCanvas(400,400);
}


function draw(){
    objectProp.create();
}


