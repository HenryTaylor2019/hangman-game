const words = ['HELLO', 'TEST', 'HANGMAN', 'FOOTBALL', 'BANANA', 'GOAT', 'FISH'];

window.onload = function () {
    // Choose a word from an array
    selectWord(words)

    console.log(answer)
}

// Selects a letter from onClick event
function letterSelected(event) {
    console.log(`Chosen letter ${event.target.innerHTML}`)
    let selectedLetter = event.target.innerHTML
    checkForMatch(selectedLetter)
}
let answer;
let counter = 0;

function selectWord(words) {
    let selector = Math.floor(Math.random() * words.length)
    answer = words[selector]
    renderWord();
}

function renderWord() {
    // Extrapolates the letters from the answer
    let letters = []
    for (let i = 0; i < answer.length; i++) {
        letters.push(answer.charAt(i));
    }

    // adds the answer to the DOM but hides from page until correct letter is selected
    let letterTags = []
    letters.map(letter => {
        let letterNode = document.createTextNode(letter)
        let letterTag = document.createElement('h1')
        letterTag.appendChild(letterNode)
        letterTag.className = letterTag.textContent
        letterTag.style.visibility = "hidden"
        document.getElementById('answer-container').appendChild(letterTag)
        letterTags.push(letterTag)
    })
}

function displayLetter(selectedLetter) {
    for (let i = 0; i < answer.length; i++) {
        answer.includes(selectedLetter) ? document.querySelectorAll(`.${selectedLetter}`).forEach(el => {
            el.style.visibility = "visible"
        }) : null
    }
}

function checkForMatch(letter) {
    if (answer.includes(letter)) {
        hideSelectedButton(letter)
        displayLetter(letter)
    }

    guessCounter()

}

function hideSelectedButton(letter) {
    let button = document.getElementById(`letter-${letter}`)
    button.style.display = "none";

    console.log(`Hide letter ${letter}`)
}

function guessCounter () {
    counter += 1;
    console.log(counter)

    if (counter === 6) {
        alert('You Looses')
    }
}
