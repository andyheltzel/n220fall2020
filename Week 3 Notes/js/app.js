let i = 0;

// while loop syntax
// while(i < 5)
// {
//     console.log(i);
//     i++;
// }
// console.log("Afterwards: " + i);


// // for loop syntax
for( var y = 0; y < 5; y++) {
    console.log(y); 
}
console.log("Afterwards: "  + y);

function setup() {
    createCanvas(400, 300);
}

function draw() {
    background(100);

    noFill();

    for( var i = 0; i < 4  ; i++) {
        circle(100, 100, i * 30);
        // i * 30 makes the diameter increase by a *30 increments each time the loop runs 
    }
    

}