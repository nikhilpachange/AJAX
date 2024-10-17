let happiness = 50;
let hunger = 50;

function updatePetStatus() {
    const petStatusDiv = document.getElementById('pet-status');
    petStatusDiv.innerHTML = `Happiness: ${happiness} | Hunger: ${hunger}`;
}

document.getElementById('feed').addEventListener('click', () => {
    hunger = Math.max(0, hunger - 10);
    updatePetStatus();
});

document.getElementById('play').addEventListener('click', () => {
    happiness = Math.min(100, happiness + 10);
    updatePetStatus();
});

updatePetStatus();
