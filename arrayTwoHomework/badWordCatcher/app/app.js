let swearJar = document.getElementById("liveScore")
//converts the respective HTML elements to workable JS variables

function catcher(){

    var values = typingBox.value.toUpperCase();
    //turns water is input into the input box into a workable array, and changes each value to upper case to make sure each value is not case sensitive. 

    let theArray = values.split(" ")
    //splits the arrray at each space
    score = 0 
    //establishes a variable to use for the score
    for(i = 0; i < theArray.length; i++){
        //this is a for loop that loops through each item in the array
        if(theArray[i] == "WATER"){
            score++
        }
        if(theArray[i] == "CLEAR"){
            score++
        }
        if(theArray[i] == "TIRES"){
            score++
        }
        //tests to see if there are any "bad words" in the array
    }
    swearJar.innerHTML = "Swear Jar: $" + score
    typingBox.value = ""
    //adds the score after the for loop has run its course.
}