const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];

const btn = document.getElementById("btn");
const color = document.querySelector(".color");

const HEX_NUMBER_SIZE = 6;

btn.addEventListener("click", function(){
    let hexNumber = "#";
    for(let i=0; i<HEX_NUMBER_SIZE; i++){
        hexNumber = hexNumber + hex[getRandomNumber()];
    }
    document.body.style.backgroundColor = hexNumber;
    color.innerText = hexNumber;
    color.style.color = hexNumber;
    btn.style.backgroundColor = hexNumber;
})

function getRandomNumber(){
    return Math.floor(Math.random() * hex.length);
}