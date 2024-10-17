const flashcards = [
    { question: "What is the capital of France?", answer: "Paris" },
    { question: "What is 2 + 2?", answer: "4" },
    { question: "What is the color of the sky?", answer: "Blue" }
];

let currentCardIndex = 0;

document.getElementById('show-answer').addEventListener('click', () => {
    document.getElementById('answer').style.display = 'block';
});

document.getElementById('next').addEventListener('click', () => {
    currentCardIndex = (currentCardIndex + 1) % flashcards.length;
    loadFlashcard();
});

function loadFlashcard() {
    document.getElementById('question').textContent = flashcards[currentCardIndex].question;
    document.getElementById('answer').textContent = flashcards[currentCardIndex].answer;
    document.getElementById('answer').style.display = 'none';
}

loadFlashcard(); // Load the first flashcard
