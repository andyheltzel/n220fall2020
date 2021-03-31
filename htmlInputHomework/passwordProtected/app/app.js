let answer = document.getElementById("answer");
let user = document.getElementById("user");
let pass = document.getElementById("pass");
//these are just assigning the ID of the input element from the HTML file a JS variable.


function loginFunction() {

    var userTxt = user.value;
    var passTxt = pass.value;
    //these variables are just retrieving the values of whatever is being put in the HTML input box.


    if(userTxt == "Username" && passTxt == "Password") {
        answer.innerHTML = "Success";
    }else{
        answer.innerHTML = "Failure";
    }
    //this if statement is testing to see whether the information put in each input box is true (it is case sensitive), if the information is true it outputs "Success" in #answer and vice versa.

}