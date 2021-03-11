var objectProp = {
    xPos: 200,
    yPos: 200,
    wdth: 10,
    hght: 10,
    color: [252, 3, 69],
    boundaries: 400,
    create: function(){
        fill(this.color);
        this.wdth += 1;
        this.hght += 1;
        noStroke();
        rectMode(CENTER);
        if(this.wdth === 400){
            this.wdth = 0
        }
        rect(this.xPos, this.yPos, this.wdth, this.hght);
        
    }
}
function setup(){
    createCanvas(400,400);
}

function draw(){
    objectProp.create();
}