// let carProducers = [ "Subaru", "Honda", "Studebaker" ];

// for(var i = 0; i < carProducers.lenth; i++) {
//     console.log("I own a " + carProducers[i]);
// }

// let colors = ["#314e52", "#f2a154", "#f7f6e7", "#e7e6e1"];

let positions = [0,0,0,0]

function setup() {
    createCanvas(400, 300);

    
}

function draw() {
    console.log(positions);

    for(var i = 0; i < positions.length; i++) {
        
        circle(positions[i], 150, 20)
    }
}
