const flashcards = [
    { question: "What is the capital of France?", answer: "Paris" },
    { question: "What is 2 + 2?", answer: "4" },
    { question: "What is the capital of Japan?", answer: "Tokyo" }
];

let currentFlashcard = 0;

function displayFlashcard() {
    const flashcardDiv = document.getElementById('flashcard');
    flashcardDiv.textContent = flashcards[currentFlashcard].question;
}

document.getElementById('submit-answer').addEventListener('click', () => {
    const userAnswer = document.getElementById('answer').value;
    const result = document.getElementById('result');

    if (userAnswer.toLowerCase() === flashcards[currentFlashcard].answer.toLowerCase()) {
        result.textContent = 'Correct!';
    } else {
        result.textContent = `Wrong! The correct answer is ${flashcards[currentFlashcard].answer}.`;
    }

    currentFlashcard = (currentFlashcard + 1) % flashcards.length;
    displayFlashcard();
    document.getElementById('answer').value = '';
});

displayFlashcard();
