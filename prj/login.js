// Sample user and vendor data stored as a JSON object
const userData = {
    "users": [
        { "username": "user1", "password": "password1", "role": "User" },
        { "username": "user2", "password": "password2", "role": "User" }
    ],
    "vendors": [
        { "username": "vendor1", "password": "vendorpassword1", "role": "Vendor" },
        { "username": "vendor2", "password": "vendorpassword2", "role": "Vendor" }
    ]
};

// Show/Hide Password functionality
document.getElementById('showPassword').addEventListener('change', function () {
    const passwordField = document.getElementById('password');
    passwordField.type = this.checked ? 'text' : 'password';
});

// Function to handle login validation and redirect
document.getElementById('loginBtn').addEventListener('click', function () {
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    const role = document.querySelector('input[name="role"]:checked').value;

    let isValidUser = false;
    let roleData;

    // Check if the entered user matches any in the user data
    if (role === "User") {
        isValidUser = userData.users.some(function (usr) {
            if (usr.username === username && usr.password === password) {
                roleData = usr;
                return true;
            }
        });
    } else if (role === "Vendor") {
        isValidUser = userData.vendors.some(function (vdr) {
            if (vdr.username === username && vdr.password === password) {
                roleData = vdr;
                return true;
            }
        });
    }

    if (isValidUser) {
        // Redirect to dashboard based on role
        if (roleData.role === "User") {
            window.location.href = "userDashboard.html";  // Path to User Dashboard
        } else if (roleData.role === "Vendor") {
            window.location.href = "vendorDashboard.html";  // Path to Vendor Dashboard
        }
    } else {
        alert('Invalid credentials. Please try again.');
    }
});
