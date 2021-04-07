let dvOne = document.getElementById("dvOne")
//This just turns the div into a workable JS variable


let hgt = 100;
let wdt = 100;
//sets a global variable for height and width

dvOne.style.backgroundColor = "#008000"
dvOne.style.height = hgt + "px";
dvOne.style.width = wdt + "px";
//setting the standard styling of the square

function bigger(){
    hgt = hgt * 1.1
    wdt = wdt * 1.1
    dvOne.style.height = hgt + "px";
    dvOne.style.width = wdt + "px";
}
//this function modifies the height every time the square is clicked on