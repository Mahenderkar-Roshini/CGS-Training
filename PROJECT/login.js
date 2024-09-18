// Load data from JSON database
fetch('user.json')
  .then(response => response.json())
  .then(data => {
    const user = data.user;
  })
    fetch('vendor.json')
    .then(response => response.json())
    .then(data => {
      const vendor = data.vendor;
    })
    


    // Login functionality
    document.getElementById('login-form')?.addEventListener('submit', (e) => {
      e.preventDefault();
      const username = document.getElementById('username').value;
      const password = document.getElementById('password').value;

      const user = user.find(user => user.username === username && user.password === password);

      if (user) {
        // Login successful, redirect based on role
        localStorage.setItem('userId', user.id);
        if (role === 'user') {
          window.location.href = 'user dashboard.html';
        } else {
          window.location.href = 'Vendor DashBoard.html';
        }
      } else {
        document.getElementById('error-message').innerHTML = 'Invalid username or password';
      }
    });

    // vendor dashbord functionality
    if (window.location.href.includes('profile.html')) {
      const userId = localStorage.getItem('userId');
      const user = user.find(user => user.id === parseInt(userId));

      if (user) {
        document.getElementById('name').innerHTML = user.name;

        document.getElementById('logout-btn')?.addEventListener('click', () => {
          localStorage.removeItem('userId');
          window.location.href = 'index.html';
        });
      } else {
        window.location.href = 'index.html';
      }
    }

    // user functionality
    if (window.location.href.includes('user dashboard.html')) {
      const userId = localStorage.getItem('userId');
      const user = users.find(user => user.id === parseInt(userId));

      if (user && user.isAdmin) {
        document.getElementById('user name').innerHTML = user.name;

        const usersList = document.getElementById('users-list');
        users.forEach(u => {
          const listItem = document.createElement('li');
          listItem.textContent = `${u.name} (${u.email})`;
          usersList.appendChild(listItem);
        });

        document.getElementById('logout-btn')?.addEventListener('click', () => {
          localStorage.removeItem('userId');
          window.location.href = 'login.html';
        });
      } else {
        window.location.href = 'login.html';
      }
    }
  
  ;



document.getElementById('showPassword').addEventListener('click', function() {
    const passwordField = document.getElementById('password');
    if (this.checked) {
        passwordField.type = 'text';
    } else {
        passwordField.type = 'password';
    }
});

// Display email and password when the Next button is clicked
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

document.getElementById('loginBtn').addEventListener('click', function() {
    const email = document.getElementById('loginEmail').value;
    const password = document.getElementById('loginPassword').value;

    if (email && password) {
        // You can add authentication logic here

        // Redirect to the dashboard if login is successful
        window.location.href = 'Vendor DashBoard.html'; // Change 'dashboard.html' to your actual dashboard URL
    } else {
        alert('Please enter both email and password.');
    }
});


document.getElementById('loginBtn').addEventListener('click', function() {
    const email = document.getElementById('mailId').value;
    const password = document.getElementById('password').value;
    
    if (email && password) {
        // Assume successful login. You can replace this with your actual login logic.

        // Show toast
        $('.toast').toast('show');

        // Redirect to the dashboard after a short delay (3 seconds)
        setTimeout(() => {
            window.location.href = 'user dashboard.html'; // Replace with your dashboard URL
        }, 3000);
    } else {
      alert('Please enter both email and password.');
  } 

});