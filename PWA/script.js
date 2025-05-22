let currentIndex = 0;
let animalsData = [];

async function fetchData() {
    const response = await fetch('data.json');
    animalsData = await response.json();
    displayAnimal(currentIndex);
}

function displayAnimal(index) {
    const animal = animalsData.animals[index];
    document.getElementById("animal-name").textContent = animal.name;
    document.getElementById("animal-image").src = animal.image;
    document.getElementById("animal-description").textContent = animal.description;
    document.getElementById("animal-habitat").textContent = animal.habitat;
    document.getElementById("animal-relatives").textContent = animal.relatives.join(", ");
    document.getElementById("animal-ability").textContent = animal.best_ability;
    document.getElementById("animal-fact").textContent = animal.interesting_fact;
    document.getElementById("animal-sound").src = animal.audio;
}

document.getElementById("prev-btn").addEventListener("click", () => {
    if (currentIndex > 0) {
        currentIndex--;
        displayAnimal(currentIndex);
    }
});

document.getElementById("next-btn").addEventListener("click", () => {
    if (currentIndex < animalsData.animals.length - 1) {
        currentIndex++;
        displayAnimal(currentIndex);
    }
});

fetchData();