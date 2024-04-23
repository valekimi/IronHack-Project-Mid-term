
//===============================
/* FORM VALIDATIONS */

document.addEventListener("DOMContentLoaded", function() {
    const fullnameInput = document.getElementById('fullname');
    const emailInput = document.getElementById('email');
    const phoneInput = document.getElementById('phone');
    const form = document.getElementById('myForm');
    form.addEventListener('submit', function(event) {
        // Prevent form submission
        event.preventDefault();
        
        // Validate inputs
        validateInput(fullnameInput, 'fullnameError', 'Please provide your full name.');
        validateInput(emailInput, 'emailError', 'Please provide a valid email address.');
        validateInput(phoneInput, 'phoneError', 'Please provide your phone number.');
    });

    function validateInput(input, errorId, errorMessage) {
        const value = input.value.trim();
        const errorElement = document.getElementById(errorId);
        
        if (value === '') {
            input.classList.add('error');
            errorElement.textContent = errorMessage;
        } else {
            input.classList.remove('error');
            errorElement.textContent = '';
        }
    }
    // Add blur event listeners to inputs
    fullnameInput.addEventListener('blur', function() {
        validateInput(fullnameInput, 'fullnameError', 'Please provide your full name.');
    });

    emailInput.addEventListener('blur', function() {
        validateInput(emailInput, 'emailError', 'Please provide a valid email address.');
    });

    phoneInput.addEventListener('blur', function() {
        validateInput(phoneInput, 'phoneError', 'Please provide your phone number.');
    });
});