const scriptURL = 'https://script.google.com/macros/s/AKfycbycEhR42OEffENi1FZjhqa145U9xJ2DuMKetuA9e95YsG3Rk_pKen6496IY8nADdssE9g/exec';
const form = document.getElementById('form-main');
const submitBtn = document.getElementById('form-submit');
const formContainer = document.getElementById('form-main');
const thankYouMessage = document.getElementById('thankYouMessage');

form.addEventListener('submit', function (e) {
    e.preventDefault();

    // Disable the submit button to prevent multiple submissions
    

    // Initialize the text content
    let dots = '';
    let dotCount = 0;

    // Function to update the button text
    function updateButtonText() {
        if (dotCount < 3) {
            dots += '.';
            dotCount++;
        } else {
            dots = '';
            dotCount = 0;
        }
        submitBtn.textContent = 'Submit' + dots;
    }

    // Start the interval to update the button text
    const interval = setInterval(updateButtonText, 500);

    fetch(scriptURL, {
        method: 'POST',
        body: new FormData(form)
    })
    
    .then(response => {
        clearInterval(interval); // Stop updating the button text
        formContainer.style.display = 'none'; // Hide the form
        thankYouMessage.style.display = 'block'; // Show the thank you message
    })
        
    .catch(error => {
        clearInterval(interval); // Stop updating the button text
        submitBtn.textContent = 'Submit'; // Reset the button text
        submitBtn.disabled = false; // Re-enable the submit button
        console.error('Error!', error.message);
    });
});
