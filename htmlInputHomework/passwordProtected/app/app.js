let txtNameOne = document.querySelector("#txtNameOne")
let txtNameTwo = document.querySelector("#txtNameTwo")
let fillDiv = document.querySelector("#fillDiv")

function passCheck(){

    if((txtNameOne == "andy") && (txtNameTwo == "heltzel")){
        fillDiv.innerHTML = "Success"
    }else{
        fillDiv.innerHTML = "Failure"
    }


}