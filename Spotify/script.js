const client_id = 'aa72f29201044716a8e07b3d1cf905ba';
const client_secret = '43b4e2590c8d40109891faa7b190d793';
let token = '';

async function fetchToken() {
    const result = await fetch('https://accounts.spotify.com/api/token', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
            'Authorization': 'Basic ' + btoa(client_id + ':' + client_secret)
        },
        body: 'grant_type=client_credentials'
    });
    const data = await result.json();
    token = data.access_token;
    fetchRecentPlaylists(); // Load recent playlists when token is fetched
}

async function searchTracks(query) {
    const result = await fetch(`https://api.spotify.com/v1/search?q=${query}&type=track`, {
        method: 'GET',
        headers: { 'Authorization': 'Bearer ' + token }
    });
    const data = await result.json();
    displayTracks(data.tracks.items);
}

async function fetchRecentPlaylists() {
    const result = await fetch('https://api.spotify.com/v1/me/playlists', {
        method: 'GET',
        headers: { 'Authorization': 'Bearer ' + token }
    });
    const data = await result.json();
    displayTracks(data.items.map(playlist => playlist.tracks.items[0])); // Display first track of each playlist
}

function displayTracks(tracks) {
    const resultsContainer = document.getElementById('results');
    resultsContainer.innerHTML = '';

    tracks.forEach(track => {
        if (track) {
            const trackElement = document.createElement('div');
            trackElement.classList.add('col-md-3', 'mb-4');
            trackElement.innerHTML = `
                <div class="card h-100">
                    <img src="${track.album.images[0].url}" class="card-img-top" alt="${track.name}">
                    <div class="card-body">
                        <h5 class="card-title">${track.name}</h5>
                        <p class="card-text">${track.artists[0].name}</p>
                        <audio controls>
                            <source src="${track.preview_url}" type="audio/mpeg">
                            Your browser does not support the audio element.
                        </audio>
                    </div>
                </div>
            `;
            resultsContainer.appendChild(trackElement);
        }
    });
}

const searchButton = document.getElementById('searchButton');
const searchInput = document.getElementById('searchSong');

searchButton.addEventListener('click', () => {
    const query = searchInput.value;
    if (query) {
        searchTracks(query);
    }
});

fetchToken();
