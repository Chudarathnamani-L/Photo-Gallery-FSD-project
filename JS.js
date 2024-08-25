document.getElementById('registrationForm').addEventListener('submit', function(event) {
    event.preventDefault();
    // Perform validation
    let username = document.getElementById('username').value;
    let password = document.getElementById('password').value;
    if (username.length < 3) {
        alert('Username must be at least 3 characters long.');
    } else if (password.length < 8) {
        alert('Password must be at least 8 characters long.');
    } else {
        alert('Registration Successful!');
        // Submit the form or process further as needed
    }
});

document.getElementById('uploadForm').addEventListener('submit', function(event) {
    event.preventDefault();
    // Perform validation and image upload processing
    alert('Image Uploaded Successfully!');
});

document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault();
    // Perform validation and send message
    alert('Message Sent Successfully!');
});
