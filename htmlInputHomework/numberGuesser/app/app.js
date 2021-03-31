let answer = document.getElementById("answer");
let numGuess = document.getElementById("numGuess");
//these are just assigning the ID of the input element from the HTML file a JS variable.


function guessFunction() {

    var numberGuess = Number(numGuess.value);
    //these variables are just retrieving the values of whatever is being put in the HTML input box.

    

    console.log(randNum);

    if(numberGuess == randNum || numberGuess == 21) {
        answer.innerHTML = "You got it!";
        function randomNumber(){
            var randNum = Math.floor(Math.random()*21);
        }
    }
    if(numberGuess > randNum) {
        answer.innerHTML = "Too high. Guess again!";
    }
    if(numberGuess < randNum) {
        answer.innerHTML = "Too low. Guess again!";
    }
    


    //this if statement is testing to see whether the information put in each input box is true (it is case sensitive), if the information is true it outputs "Success" in #answer and vice versa.

}