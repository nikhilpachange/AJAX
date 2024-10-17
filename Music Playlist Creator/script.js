const playlist = [];

document.getElementById('add-track').addEventListener('click', () => {
    const track = document.getElementById('track').value;
    if (track) {
        playlist.push(track);
        updatePlaylist();
        document.getElementById('track').value = '';
    }
});

function updatePlaylist() {
    const playlistUl = document.getElementById('playlist');
    playlistUl.innerHTML = '';
    playlist.forEach(track => {
        const li = document.createElement('li');
        li.className = 'track';
        li.textContent = track;
        playlistUl.appendChild(li);
    });
}
