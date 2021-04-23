let question1 = document.getElementById("question1")
let question2 = document.getElementById("question2")
let question3 = document.getElementById("question3")
question1.addEventListener("click", readAnswer);
question2.addEventListener("click", readAnswer);
question3.addEventListener("click", readAnswer);

function readAnswer(event){

    let answer = event.target.getAttribute("data-answer")
    event.target.innerHTML = answer

    
}