const alphabet = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z']
const words = ['HELLO', 'TEST', 'HANGMAN', 'FOOTBALL'];

window.onload = function () {
    // Choose a word from an array
    selectWord(words)

    console.log(selectedWord)
}

// Selects a letter from onClick event
function letterSelected(event) {
    console.log(`Chosen letter ${event.target.innerHTML}`)
    let selectedLetter = event.target.innerHTML
    checkWord(selectedLetter)
}

// variable that holds word selected from array
let selectedWord;

function selectWord(words) {
    // Chooses a word from array with using random as index
    let selector = Math.floor(Math.random() * words.length)
    selectedWord = words[selector]
}

function hideSelectedButton(letter) {
    let button = document.getElementById(`letter-${letter}`)
    console.log(`sick ${letter.innerText}`)
    button.style.display = "none"
}

function checkWord(letter) {
    if (selectedWord.includes(letter)) {
        console.log('Correct')
        hideSelectedButton(letter)

    } else {
        console.log('Wrong letter')
    }
}
