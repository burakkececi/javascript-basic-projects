const numberOfCounter = document.getElementById("numberCounter");

const btn_decrease = document.getElementById("btn_decrease");
const btn_reset = document.getElementById("btn_reset");
const btn_increase = document.getElementById("btn_increase");

btn_decrease.addEventListener("click", function () {

    let number = parseInt(numberOfCounter.innerText)-1;
    numberOfCounter.innerText = number;
    checkNumberSign(number);


})

btn_reset.addEventListener("click", function () {
    let number = 0;
    numberOfCounter.innerText = number;
    checkNumberSign(number);
})

btn_increase.addEventListener("click", function () {
    let number = parseInt(numberOfCounter.innerText)+1;
    numberOfCounter.innerText = number;
    checkNumberSign(number);
})

function checkNumberSign(number){
    if(number > 0){
        numberOfCounter.style.color = "green";
    }else if(number < 0){
        numberOfCounter.style.color = "red";
    }else{
        numberOfCounter.style.color = "black";
    }
}