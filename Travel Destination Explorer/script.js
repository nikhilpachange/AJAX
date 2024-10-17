document.getElementById('explore').addEventListener('click', () => {
    const destination = document.getElementById('destination').value;

    fetch(`https://api.unsplash.com/search/photos?query=${destination}&client_id=YOUR_ACCESS_KEY`)
        .then(response => response.json())
        .then(data => {
            const resultsDiv = document.getElementById('results');
            resultsDiv.innerHTML = '';
            if (data.results.length > 0) {
                data.results.forEach(image => {
                    const img = document.createElement('img');
                    img.src = image.urls.small;
                    img.alt = image.description || 'Travel image';
                    img.style.width = '300px';
                    resultsDiv.appendChild(img);
                });
            } else {
                resultsDiv.innerHTML = '<p>No images found.</p>';
            }
        });
});
