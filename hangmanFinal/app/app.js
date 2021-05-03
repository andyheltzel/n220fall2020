wordBank = ["word", "fact", "goat", "mark", "fire", "foil", "earn", "ends", "five", "four"]
//This establishes my array of possible words

var valueOfCurrentWord = myWord();
console.log(valueOfCurrentWord)
//this assigns the return value of myWord() to a variable

wordDisplay = valueOfCurrentWord.split("")
console.log(wordDisplay)
//this splits up the randomly selected word from wordBank[] into an array of letters to be guessed

workingWord = []
//established an empty array to store the correctly guessed letters

wrong = 0
//establishes a global varaible for the hangman drawing function to start off of.

spotsInt = -1
//establishes a global variable for the correctly guessed words to start off of

spots = [spotOne, spotTwo, spotThree, spotFour]
spotOne = document.getElementById("spotOne")
spotTwo = document.getElementById("spotTwo")
spotThree = document.getElementById("spotThree")
spotFour = document.getElementById("spotFour")
//Using DOM to retrieve the divs by ID in which the correctly guessed letters will be placed

function setup(){
    createCanvas(400, 400);
    background("grey")
}
//establishes the background for the gallows to be drawn on


function buttonDisable(wordID){
    if(wordID === "a"){
        document.getElementById("a").setAttribute("disabled", true)
    }
    if(wordID === "b"){
        document.getElementById("b").setAttribute("disabled", true)
    }
    if(wordID === "c"){
        document.getElementById("c").setAttribute("disabled", true)
    }
    if(wordID === "d"){
        document.getElementById("d").setAttribute("disabled", true)
    }
    if(wordID === "e"){
        document.getElementById("e").setAttribute("disabled", true)
    }
    if(wordID === "f"){
        document.getElementById("f").setAttribute("disabled", true)
    }
    if(wordID === "g"){
        document.getElementById("g").setAttribute("disabled", true)
    }
    if(wordID === "h"){
        document.getElementById("h").setAttribute("disabled", true)
    }
    if(wordID === "i"){
        document.getElementById("i").setAttribute("disabled", true)
    }
    if(wordID === "j"){
        document.getElementById("j").setAttribute("disabled", true)
    }
    if(wordID === "k"){
        document.getElementById("k").setAttribute("disabled", true)
    }
    if(wordID === "l"){
        document.getElementById("l").setAttribute("disabled", true)
    }
    if(wordID === "m"){
        document.getElementById("m").setAttribute("disabled", true)
    }
    if(wordID === "n"){
        document.getElementById("n").setAttribute("disabled", true)
    }
    if(wordID === "o"){
        document.getElementById("o").setAttribute("disabled", true)
    }
    if(wordID === "p"){
        document.getElementById("p").setAttribute("disabled", true)
    }
    if(wordID === "q"){
        document.getElementById("q").setAttribute("disabled", true)
    }
    if(wordID === "r"){
        document.getElementById("r").setAttribute("disabled", true)
    }
    if(wordID === "s"){
        document.getElementById("s").setAttribute("disabled", true)
    }
    if(wordID === "t"){
        document.getElementById("t").setAttribute("disabled", true)
    }
    if(wordID === "u"){
        document.getElementById("u").setAttribute("disabled", true)
    }
    if(wordID === "v"){
        document.getElementById("v").setAttribute("disabled", true)
    }
    if(wordID === "w"){
        document.getElementById("w").setAttribute("disabled", true)
    }
    if(wordID === "x"){
        document.getElementById("x").setAttribute("disabled", true)
    }
    if(wordID === "y"){
        document.getElementById("y").setAttribute("disabled", true)
    }
    if(wordID === "z"){
        document.getElementById("z").setAttribute("disabled", true)
    }
}
//disables the buttons once they have been clicked. Uses if statements to check.

function drawHangman(){
    if(wrong === 1){
        line(100, 300, 300, 300)
    }
    if(wrong === 2){
        line(200, 300, 200, 100)
    }
    if(wrong === 3){
        line(200, 100, 300, 100)
    }
    if(wrong === 4){
        line(300, 100, 300, 150)
    }
    if(wrong === 5){
        ellipse(300, 150, 50, 50)
    }
    if(wrong === 6){
        line(300, 180, 300, 250)
    }
    if(wrong === 7){
        line(300, 250, 320, 280)
    }
    if(wrong === 8){
        line(300, 250, 280, 280)
    }
    if(wrong === 9){
        line(270, 200, 300, 200)
    }
    if(wrong === 10){
        line(300, 200, 330, 200)
        // background("red")
    }
}
//draws the gallows and man everytime an incorrect letter is guessed.


function myWord() {
    var currentWord = wordBank[Math.floor(Math.random()*wordBank.length)];
    return currentWord;
}
//randomly selectes a word from wordBank[]


function guess(wordID){
    letterCheck = wordDisplay.includes(wordID)
    //assigning a tool that checks if my word contains the letter that the user is clicking on. Will return true or false.
    
    if (letterCheck == true){
        spotsInt++
        // console.log(spotsInt)
        workingWord.push(wordID)
        console.log(workingWord)
        spots[spotsInt].innerHTML = wordID
    }else{
        wrong++
    }
    //Checks to see if the letter is in the word, if it is true, it will add the letter to the spot in the div, and add the letter to the working array. If it is wrong, it will draw on the canvas.

    drawHangman();
    //calls the drawHangman(), the conditionals inside the function makes sure that this does not run unless the letter is guessed incorrectly.

    if(wrong === 10){
        alert("You lost! Hit refresh or ctrl + r to restart!")
    }
    //if wrong holds a value equal to 10, it runs an alert saying you lost.

    if(JSON.stringify(wordDisplay) === JSON.stringify(workingWord)){
        alert("You got the word! Hit refresh or ctrl + r to try again!")
    } 
}
//this is the meat and potatoes of how my program works.
