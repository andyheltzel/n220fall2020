let dvOne = document.getElementById("dvOne")
//This just turns the div into a workable JS variable


let hgt = 100;
let wdt = 100;
//sets a global variable for height and width


dvOne.style.height = hgt + "px";
dvOne.style.width = wdt + "px";
//setting the standard styling of the square

function over(){
    dvOne.style.backgroundColor = "#000000"
}
//this function runs when the mouse is over the square

function out(){
    dvOne.style.backgroundColor = "#0000ff"
}
//this function run when the mouse in not over the square