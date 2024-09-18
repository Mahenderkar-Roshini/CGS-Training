const generateButton = document.getElementById('generateButton');
const userNameElement = document.getElementById('userName');
const userEmailElement = document.getElementById('userEmail');
const userLocationElement = document.getElementById('userLocation');
const userGenderElement = document.getElementById('userGender');
const userImageElement = document.getElementById('userImage');

generateButton.addEventListener('click', () => {
    fetch('https://randomuser.me/api/')
        .then(response => response.json())
        .then(data => {
            const user = data.results[0];
            userNameElement.textContent = `${user.name.first} ${user.name.last}`;
            userEmailElement.textContent = user.email;
            userLocationElement.textContent = `${user.location.city}, ${user.location.state}, ${user.location.country}`;
            userGenderElement.textContent = user.gender;
            userImageElement.src = user.picture.large;
        })
        .catch(error => {
            console.error('Error fetching random user data:', error);
        });
});