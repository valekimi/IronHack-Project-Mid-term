
//===============================
/* FORM VALIDATIONS */

document.getElementById('contactForm').addEventListener('submit', function(event) {
    const inputs = document.querySelectorAll('input[required], textarea[required]');
    let isValid = true;
    inputs.forEach(function(input) {
        if (!input.value.trim()) {
            isValid = false;
            showError(input);
        }
    });
    if (!isValid) {
        event.preventDefault();
    }
});

function showError(element) {
    console.log(element);
    element.style.border = '2px solid #ff0000';
    const errorMessageElement = element.nextElementSibling;

    if (errorMessageElement && errorMessageElement.classList.contains('error-message')) {
        errorMessageElement.textContent = 'This field is required.';
    }
}

document.querySelectorAll('input[required], textarea[required]').forEach(function(input) {
    input.addEventListener('blur', function() {
        if (!this.value.trim()) {
            showError(this);

        } else {
            this.style.borderColor = '';
            const errorMessageElement = this.nextElementSibling;

            if (errorMessageElement && errorMessageElement.classList.contains('error-message')) {
                errorMessageElement.textContent = '';
            }
        }
    });
});


//===============================
/* SNACKBAR VALIDATIONS */

document.getElementById("contactForm").addEventListener("submit", function(event){
    event.preventDefault();
    var snackbar = document.getElementById("snackbar");
    snackbar.className = "show";
    setTimeout(function(){ snackbar.className = snackbar.className.replace("show", ""); }, 3000);
  });