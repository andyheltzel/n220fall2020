// let myGuitar = {
//     make: "luna",
//     strings: "steel",
//     loudness: 10,
//     acoustic: true
// }

// console.log("StartLoudness: " + myGuitar.loudness); 

// myGuitar.loudness = myGuitar.loudness - 1;

// console.log("CurrentLoudness: " + myGuitar.loudness); 


var myCircle = {
    r: 15,
    x: 20,
    y: 30,
    color: [156, 0, 250],
    update: function() {
        fill(this.color)
        this.x += 2;
        circle(this.x, this.y, this.r);
    }
}

function setup() {
    createCanvas(400,300);

}

function draw() {
    myCircle.update();
}