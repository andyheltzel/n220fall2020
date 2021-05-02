wordBank = ["word", "letter", "number", "alphabet", "integer", "comma", "period", "colon", "hyphen", "apostrophe"]

var valueOfCurrentWord = myWord();
console.log(valueOfCurrentWord)

wordDisplay = valueOfCurrentWord.split("")
console.log(wordDisplay)

workingWord = []

wrong = 0

function setup(){
    createCanvas(400, 400);
    background("grey")
}

function draw(){
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

    if(wrong === 10){
        alert("You lost!")
    }

    if(JSON.stringify(wordDisplay) === JSON.stringify(workingWord)){
        alert("You got the word!")
    }

}

