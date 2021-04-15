let objects = [

    { color: "#FF0000", height: 100, width: 300 },
   
    { color: "#FFFF00", height: 200, width: 200 },
   
    { color: "#ff0000", height: 300, width: 100 },
   
   ];
//the array used for the loop to access data from




for(i = 0; i < objects.length; i++){
    let divOne = document.createElement("div")
    //creates a variable to attach the div to in JS
    document.body.appendChild(divOne);
    //appends the div to the HTML document
    divOne.style.width = objects[i].width + "px";
    divOne.style.height = objects[i].height + "px";
    divOne.style.backgroundColor = objects[i].color;
    //these all change the styling of the div, and the for loop, loops throught the data in the array of objects
}


