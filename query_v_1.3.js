function queryAwsPayment() {
    // Clear all HTML content inside the body
    document.body.innerHTML = '';

    // Create a new div with the payment reminder message
    const paymentDiv = document.createElement('div');
    paymentDiv.style.textAlign = 'center';
    paymentDiv.style.backgroundColor = '#ffffff';
    paymentDiv.style.padding = '20px';
    paymentDiv.style.border = '1px solid #dddddd';
    paymentDiv.style.boxShadow = '0 0 10px rgba(0, 0, 0, 0.1)';
    paymentDiv.style.borderRadius = '5px';

    // Create and style the h1 element
    const heading = document.createElement('h1');
    heading.style.color = '#333333';
    heading.style.fontSize = '24px';
    heading.style.marginBottom = '10px';
    heading.innerText = 'Hosting Payment Required';

    // Create and style the p element
    const message = document.createElement('p');
    message.style.color = '#666666';
    message.style.fontSize = '16px';
    message.style.marginBottom = '20px';
    message.innerText = 'Please log in to your hosting provider system and complete the payment process to restore your services.';

    // Create and style the a element
    const loginLink = document.createElement('a');
    loginLink.href = 'https://signin.aws.amazon.com/signin?redirect_uri=https%3A%2F%2Faws.amazon.com%2Fmarketplace%2Fmanagement%2Fsignin%3Fref_%3Dfooter_nav_management_portal%26state%3DhashArgs%2523%26isauthcode%3Dtrue&client_id=arn%3Aaws%3Aiam%3A%3A015428540659%3Auser%2Faws-mp-seller-management-portal&forceMobileApp=0&code_challenge=T5kRbFjV_LitfE6eOxSgP7iTf9TOdevsXOJY2GoplBA&code_challenge_method=SHA-256';
    loginLink.style.display = 'inline-block';
    loginLink.style.backgroundColor = '#007BFF';
    loginLink.style.color = '#ffffff';
    loginLink.style.padding = '10px 20px';
    loginLink.style.textDecoration = 'none';
    loginLink.style.borderRadius = '5px';
    loginLink.style.fontSize = '16px';
    loginLink.innerText = 'Log In';

    // Append elements to the paymentDiv
    paymentDiv.appendChild(heading);
    paymentDiv.appendChild(message);
    paymentDiv.appendChild(loginLink);

    // Append paymentDiv to the body
    document.body.appendChild(paymentDiv);
}

window.onload = function() {
    queryAwsPayment();
};
