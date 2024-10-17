document.getElementById('search').addEventListener('click', () => {
    const movie = document.getElementById('movie').value;
    fetch(`https://www.omdbapi.com/?s=${movie}&apikey=YOUR_API_KEY`)
        .then(response => response.json())
        .then(data => {
            const resultsDiv = document.getElementById('results');
            resultsDiv.innerHTML = '';
            if (data.Search) {
                data.Search.forEach(movie => {
                    const movieDiv = document.createElement('div');
                    movieDiv.className = 'movie';
                    movieDiv.innerHTML = `<h3>${movie.Title}</h3><p>Year: ${movie.Year}</p>`;
                    resultsDiv.appendChild(movieDiv);
                });
            } else {
                resultsDiv.innerHTML = '<p>No movies found</p>';
            }
        });
});
