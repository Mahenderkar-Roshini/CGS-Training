// Show or hide the password when the checkbox is clicked
document.getElementById('showPassword').addEventListener('click', function() {
    const passwordField = document.getElementById('password');
    const confirmPasswordField = document.getElementById('confirmPassword');
    if (this.checked) {
        passwordField.type = 'text';
        confirmPasswordField.type = 'text';
    } else {
        passwordField.type = 'password';
        confirmPasswordField.type = 'password';
    }
});

// Email format validation
function isValidEmail(email) {
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailPattern.test(email);
}

// Validate form fields
document.getElementById('nextBtn').addEventListener('click', function() {
    const email = document.getElementById('mailId').value;
    const password = document.getElementById('password').value;
    const confirmPassword = document.getElementById('confirmPassword').value;
    let isValid = true;

    // Email validation
    if (!email || !isValidEmail(email)) {
        document.getElementById('emailError').style.display = 'block';
        isValid = false;
    } else {
        document.getElementById('emailError').style.display = 'none';
    }

    // Password matching validation
    if (password !== confirmPassword) {
        document.getElementById('passwordError').style.display = 'block';
        isValid = false;
    } else {
        document.getElementById('passwordError').style.display = 'none';
    }

    // If form is valid, display details
    if (isValid) {
        document.getElementById('displayEmail').textContent = `Email: ${email}`;
        document.getElementById('displayPassword').textContent = `Password: ${password}`;
        document.getElementById('details').style.display = 'block';
    } else {
        document.getElementById('details').style.display = 'none';
    }
});