// EmailJS configuration
// IMPORTANT: Replace these values with your actual EmailJS credentials
const EMAILJS_SERVICE_ID = 'service_rtncsgq';
const EMAILJS_TEMPLATE_ID = 'template_zzoq2ji';
const EMAILJS_PUBLIC_KEY = 'FkQY2Ii4rpYWSwujD';

// Initialize EmailJS
(function() {
    emailjs.init(EMAILJS_PUBLIC_KEY);
})();

// Get form elements
const form = document.getElementById('messageForm');
const sendButton = document.getElementById('sendButton');
const statusMessage = document.getElementById('statusMessage');

// Handle form submission
form.addEventListener('submit', function(event) {
    event.preventDefault();
    
    // Disable button and show loading state
    sendButton.disabled = true;
    sendButton.textContent = 'Sending...';
    statusMessage.style.display = 'none';
    
    // Get form data
    const formData = {
        from_name: document.getElementById('name').value,
        from_email: document.getElementById('email').value,
        message: document.getElementById('message').value,
        to_email: 'paustudylaptop@gmail.com'
    };
    
    // Send email using EmailJS
    emailjs.send(EMAILJS_SERVICE_ID, EMAILJS_TEMPLATE_ID, formData)
        .then(function(response) {
            console.log('SUCCESS!', response.status, response.text);
            showStatus('Message sent successfully!', 'success');
            form.reset();
        })
        .catch(function(error) {
            console.log('FAILED...', error);
            showStatus('Failed to send message. Please try again.', 'error');
        })
        .finally(function() {
            sendButton.disabled = false;
            sendButton.textContent = 'Send';
        });
});

// Show status message
function showStatus(message, type) {
    statusMessage.textContent = message;
    statusMessage.className = 'status-message ' + type;
    statusMessage.style.display = 'block';
    
    // Hide message after 5 seconds
    setTimeout(function() {
        statusMessage.style.display = 'none';
    }, 5000);
}
