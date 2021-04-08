let numbers = document.getElementById("averageBox")
let sumDisplay = document.getElementById("sumDisplay")
let averageDisplay = document.getElementById("averageDisplay")
//converts the respective HTML elements to workable JS variables

function findAverage(){
    var values = averageBox.value;
    //converts the string input into a variable
    let theArray = values.split(",")
    //converts the variable into an array that is split up by commas
    let sum = 0;
    //creates a variable to hold the value for sum
    
    for(i = 0; i < theArray.length; i++){
        sum += Number(theArray[i]);
        //modifies the sum variable to add the number value of each string place as it loops through.
        let average = sum/theArray.length
        //assigns a value to the new variable "average" that is equal to sum divided by the amount of values within the array

        sumDisplay.innerHTML = "Sum: " + sum
        averageDisplay.innerHTML = "Average: " + average
        //shows this information on the HTML page
        
        numbers.value = "";
        //resets the input box to empty
    }
}