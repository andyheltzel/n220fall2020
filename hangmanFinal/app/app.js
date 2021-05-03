wordBank = ["word", "fact", "goat", "mark", "fire", "foil", "earn", "ends", "five", "four"]

var valueOfCurrentWord = myWord();
console.log(valueOfCurrentWord)

wordDisplay = valueOfCurrentWord.split("")
console.log(wordDisplay)

workingWord = []

wrong = 0

spots = [spotOne, spotTwo, spotThree, spotFour]

spotOne = document.getElementById("spotOne")
spotTwo = document.getElementById("spotTwo")
spotThree = document.getElementById("spotThree")
spotFour = document.getElementById("spotFour")

spots = [spotOne, spotTwo, spotThree, spotFour];

function setup(){
    createCanvas(400, 400);
    background("grey")
}


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


function myWord() {
    var currentWord = wordBank[Math.floor(Math.random()*wordBank.length)];
    return currentWord;
}

function guess(wordID){

    letterCheck = wordDisplay.includes(wordID)
    console.log(letterCheck)

    if (letterCheck == true){
        workingWord.push(wordID)
        console.log(workingWord)
    }else{
        wrong++
    }
    
    spots[0].innerHTML = wordID

    drawHangman();

    if(wrong === 10){
        alert("You lost!")
    }

    if(JSON.stringify(wordDisplay) === JSON.stringify(workingWord)){
        alert("You got the word!")
    }

    
}

