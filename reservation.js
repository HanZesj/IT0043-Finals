document.addEventListener('DOMContentLoaded', function () {
    const reservationForm = document.getElementById('reservationForm');
    const confirmationMessage = document.getElementById('confirmationMessage');
    
    reservationForm.addEventListener('submit', function (event) {
        event.preventDefault();
        
        if (reservationForm.checkValidity()) {
            confirmationMessage.classList.remove('hidden');
            confirmationMessage.textContent = "Reservation submitted successfully!";
            reservationForm.reset();
        } else {
            event.stopPropagation();
            reservationForm.classList.add('was-validated');
        }
    }, false);

    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();

            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });
});