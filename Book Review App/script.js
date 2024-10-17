const reviews = [];

document.getElementById('submit-review').addEventListener('click', () => {
    const title = document.getElementById('book-title').value;
    const review = document.getElementById('review').value;

    if (title && review) {
        reviews.push({ title, review });
        updateReviews();
        document.getElementById('book-title').value = '';
        document.getElementById('review').value = '';
    }
});

function updateReviews() {
    const reviewsDiv = document.getElementById('reviews');
    reviewsDiv.innerHTML = '';
    reviews.forEach(item => {
        const reviewDiv = document.createElement('div');
        reviewDiv.className = 'review';
        reviewDiv.innerHTML = `<strong>${item.title}</strong><p>${item.review}</p>`;
        reviewsDiv.appendChild(reviewDiv);
    });
}
