
document.querySelectorAll('.btn').forEach(button => {
    button.addEventListener('click', function () {
        alert('Button clicked!');
    });
});

        document.addEventListener("DOMContentLoaded", function() {
            const seats = document.querySelectorAll(".seat");
            const selectedSeatsElement = document.getElementById("selected-seats");
            const applyButton = document.getElementById("apply-button");
            const nextButton = document.getElementById("next-button");
            const passengerName = document.getElementById("passenger-name");
            const phoneNumber = document.getElementById("phone-number");
            let selectedSeats = [];
            let seatPrice = 550;
        
            seats.forEach(seat => {
                seat.addEventListener("click", function() {
                    if (!seat.classList.contains("bg-green-500")) {
                        seat.classList.add("bg-green-500");
                        selectedSeats.push(seat.dataset.seat);
                    } else {
                        seat.classList.remove("bg-green-500");
                        selectedSeats = selectedSeats.filter(s => s !== seat.dataset.seat);
                    }
        
                    updateSelectedSeats();
                });
            });
        
            function updateSelectedSeats() {
                selectedSeatsElement.innerHTML = `
                    <p>Seat(s): ${selectedSeats.join(", ") || "None"}</p>
                    <p>Total Price: BDT ${selectedSeats.length * seatPrice}</p>
                `;
        
                // Enable or disable the Apply button
                applyButton.disabled = selectedSeats.length < 4;
        
                // Update Seats Left
                document.getElementById("seats-left").textContent = 40 - selectedSeats.length;
            }
        
            passengerName.addEventListener("input", checkNextButton);
            phoneNumber.addEventListener("input", checkNextButton);
        
            function checkNextButton() {
                if (passengerName.value.trim() && phoneNumber.value.trim()) {
                    nextButton.disabled = false;
                } else {
                    nextButton.disabled = true;
                }
            }
        });
        