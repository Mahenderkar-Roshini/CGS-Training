// Load data from JSON database
fetch('data.json')
    .then(response => response.json())
    .then(data => {
        const users = data.users;

        // Login functionality
        document.getElementById('loginForm').addEventListener('submit', (e) => {
            e.preventDefault();
            const email = document.getElementById('mailId').value;
            const password = document.getElementById('password').value;

            // Find the user based on email and password
            const user = users.find(user => user.email === email && user.password === password);

            if (user) {
                // Login successful, redirect based on role
                localStorage.setItem('userId', user.id);
                if (user.role === 'vendor') {
                    window.location.href = 'vendor_dashboard.html';
                } else {
                    window.location.href = 'user_dashboard.html';
                }
            } else {
                alert('Invalid email or password');
            }
        });

        // Display entered email and password when the button is clicked
        document.getElementById('loginBtn').addEventListener('click', function() {
            const email = document.getElementById('mailId').value;
            const password = document.getElementById('password').value;

            if (email && password) {
                document.getElementById('displayEmail').textContent = `Email: ${email}`;
                document.getElementById('displayPassword').textContent = `Password: ${password}`;
                document.getElementById('details').style.display = 'block';
            } else {
                alert('Please enter both email and password');
            }
        });

        // Show/hide password
        document.getElementById('showPassword').addEventListener('click', function() {
            const passwordField = document.getElementById('password');
            if (this.checked) {
                passwordField.type = 'text';
            } else {
                passwordField.type = 'password';
            }
        });
    })
    .catch(error => {
        console.error('Error loading user data:', error);
    });
