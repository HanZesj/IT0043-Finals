function submitReservation(event) {
    event.preventDefault(); 

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const phone = document.getElementById('phone').value;
    const date = document.getElementById('date').value;
    const time = document.getElementById('time').value;
    const guests = document.getElementById('guests').value;
    const specialRequests = document.getElementById('specialRequests').value;

    if (!name || !email || !phone || !date || !time || !guests) {
        alert('Please fill in all required fields.');
        return;
    }

    const reservation = {
        name: name,
        email: email,
        phone: phone,
        date: date,
        time: time,
        guests: guests,
        specialRequests: specialRequests
    };

    console.log(reservation);
}

function showConfirmationMessage() {
    const confirmationMessage = document.getElementById('confirmationMessage');
    confirmationMessage.classList.remove('hidden');
}