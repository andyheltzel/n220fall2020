let boxOne = document.getElementById("square1")
boxOne.addEventListener("click", goAhead);
let boxTwo = document.getElementById("square2")
boxOne.addEventListener("click", goAhead);
let boxThree = document.getElementById("square3")
boxOne.addEventListener("click", goAhead);
let boxHolder = document.getElementById("boxHolder")

boxOne.style.height = "200px" 
boxOne.style.width = "200px" 
boxOne.style.backgroundColor = "#999" 
boxOne.style.cssFloat = "left"



boxTwo.style.height = "200px" 
boxTwo.style.width = "200px" 
boxTwo.style.backgroundColor = "#999" 
boxTwo.style.cssFloat = "left"
boxTwo.style.marginLeft = "5px"


boxThree.style.height = "200px" 
boxThree.style.width = "200px" 
boxThree.style.backgroundColor = "#999" 
boxThree.style.cssFloat = "left"
boxThree.style.marginLeft = "5px"


function goAhead(event){
    let colors1 = boxOne.getAttribute("data-color")
    let colors2 = boxTwo.getAttribute("data-color")
    let colors3 = boxThree.getAttribute("data-color")
    
    boxOne.style.backgroundColor = colors1
    boxTwo.style.backgroundColor = colors2
    boxThree.style.backgroundColor = colors3
}

// let dataVal = []

// let divBody = document.getElementById("divBody")

// for(i = 0; i < 3; i++){
//     let boxes = document.createElement("div");
//     boxes.style.width = "200px"
//     boxes.style.height = "200px"
//     boxes.style.backgroundColor = "#222"
//     boxes.style.cssFloat = "left"
//     boxes.style.marginLeft = "5px"
//     boxes.setAttribute = ("data-color", "#fff")

//     divBody.appendChild(boxes)

//     boxes.addEventListener("click", changeColor)
// }

// function changeColor(event){
//     let testing = event.target.getAttribute
//     console.log(testing)
// }
