const flashcardsContainer = document.getElementById("flashcardsContainer");
const form = document.getElementById("flashcardForm");

// Load flashcards from local storage
function loadFlashcards() {
    const storedFlashcards = JSON.parse(localStorage.getItem("flashcards")) || [];

    flashcardsContainer.innerHTML = ""; // Clear existing cards

    storedFlashcards.forEach((flashcard, index) => {
        createFlashcard(flashcard.word, flashcard.definition, index);
    });
}

// Create a flashcard element
function createFlashcard(word, definition, index) {
    const flashcard = document.createElement("div");
    flashcard.classList.add("flashcard");
    flashcard.innerHTML = `
        <div class="front">${word}</div>
        <div class="back">${definition}</div>
    `;
    flashcard.addEventListener("click", () => {
        flashcard.classList.toggle("flipped");
    });

    // Delete button
    const deleteBtn = document.createElement("button");
    deleteBtn.textContent = "❌";
    deleteBtn.classList.add("delete-btn");
    deleteBtn.onclick = (e) => {
        e.stopPropagation(); // Prevent flipping when deleting
        deleteFlashcard(index);
    };

    flashcard.appendChild(deleteBtn);
    flashcardsContainer.appendChild(flashcard);
}

// Add new flashcard
function addFlashcard(event) {
    event.preventDefault();

    const word = document.getElementById("wordInput").value;
    const definition = document.getElementById("definitionInput").value;

    const flashcards = JSON.parse(localStorage.getItem("flashcards")) || [];
    flashcards.push({ word, definition });
    localStorage.setItem("flashcards", JSON.stringify(flashcards));

    form.reset();
    loadFlashcards();
}

// Delete flashcard
function deleteFlashcard(index) {
    let flashcards = JSON.parse(localStorage.getItem("flashcards")) || [];
    flashcards.splice(index, 1);
    localStorage.setItem("flashcards", JSON.stringify(flashcards));

    loadFlashcards();
}

// Event Listener
form.addEventListener("submit", addFlashcard);

// Load flashcards on page load
loadFlashcards();
