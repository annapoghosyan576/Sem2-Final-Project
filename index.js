const flashcardsContainer = document.getElementById("flashcardsContainer");
const form = document.getElementById("flashcardForm");

// local storage
function loadFlashcards() {
    const storedFlashcards = JSON.parse(localStorage.getItem("flashcards")) || [];

    flashcardsContainer.innerHTML = ""; // clear the existing cards

    storedFlashcards.forEach((flashcard, index) => {
        createFlashcard(flashcard.word, flashcard.definition, index);
    });
}

// the flashcard element
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

    // make the delete button
    const deleteBtn = document.createElement("button");
    deleteBtn.textContent = "x";
    deleteBtn.classList.add("delete-btn");
    deleteBtn.onclick = (e) => {
        e.stopPropagation(); // added so it doesn't flip when you're deleting the card
        deleteFlashcard(index);
    };

    flashcard.appendChild(deleteBtn);
    flashcardsContainer.appendChild(flashcard);
}

// adding a new flashcard
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

// deleting flashcards
function deleteFlashcard(index) {
    let flashcards = JSON.parse(localStorage.getItem("flashcards")) || [];
    flashcards.splice(index, 1);
    localStorage.setItem("flashcards", JSON.stringify(flashcards));

    loadFlashcards();
}


form.addEventListener("submit", addFlashcard);

// adding flashcard to page
loadFlashcards();
