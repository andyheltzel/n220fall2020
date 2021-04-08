let dvOne = document.getElementById("dvOne")
//This just turns the div into a workable JS variable


let hgt = 100;
let wdt = 100;
//sets a global variable for height and width


dvOne.style.height = hgt + "px";
dvOne.style.width = wdt + "px";
//setting the standard styling of the square

function widen(){
    wdt = 400
    dvOne.style.width = wdt + "px";
    dvOne.style.backgroundColor = "#ffb347"
    dvOne.innerHTML = "bigger orange"
}

function shorten(){
    wdt = 100
    dvOne.style.width = wdt + "px";
    dvOne.style.backgroundColor = "#dea5a4"
    dvOne.innerHTML = "smaller pink"
}
//this function modifies the height every time the square is clicked on