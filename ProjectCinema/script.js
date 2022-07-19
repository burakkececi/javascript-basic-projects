const container = document.querySelector(".container");
const count = document.getElementById("seat-count");
const amount = document.getElementById("seat-amount");
const select = document.getElementById("movie");

const seats = document.querySelectorAll(".seat:not(.reserved)");

getFromLocalStorage();
calculateTotal();

container.addEventListener('click', function (e) {
    if ((e.target.classList.contains("seat") || e.target.classList.contains("seatbehind"))
        && !e.target.classList.contains("reserved")) {
        e.target.classList.toggle('selected');

        calculateTotal();

    }
})


select.addEventListener("change", function (e) {

    calculateTotal();
})

function calculateTotal() {
    const selectedSeat = container.querySelectorAll(".seat.selected");
    
    const selectedSeatsArr = [];
    const seatsArr = [];

    selectedSeat.forEach(element => {
        selectedSeatsArr.push(element);
    });
    
    seats.forEach(element => {
        seatsArr.push(element);
    })

    let selectedSeatIndexs = selectedSeatsArr.map(element => {
        return seatsArr.indexOf(element);
    })

    console.log(selectedSeatIndexs);

    let selectedSeatCount = selectedSeat.length;
    count.innerText = selectedSeatCount;
    amount.innerText = selectedSeatCount * select.value;

    saveToLocalStorage(selectedSeatIndexs);
}

function getFromLocalStorage(){
    const selectedSeats = JSON.parse(localStorage.getItem("selectedSeats"));
    
    if(selectedSeats != null && selectedSeats.length > 0){
        seats.forEach(function(seat, index){
            if(selectedSeats.indexOf(index) > -1){
                seat.classList.add("selected");
            }
        })
    }



    const selectedMovieIndex = localStorage.getItem("selectedMovieIndex");

    if(selectedMovieIndex != null){
        select.selectedIndex = selectedMovieIndex;
    }

}

function saveToLocalStorage(indexNumbers){
    localStorage.setItem("selectedSeats", JSON.stringify(indexNumbers));
    localStorage.setItem("selectedMovieIndex", select.selectedIndex);
}

