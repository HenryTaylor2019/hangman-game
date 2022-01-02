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
    displayLetter(selectedLetter)
}

// variable that holds word selected from array
let selectedWord;
let answer;

function selectWord(words) {
    let selector = Math.floor(Math.random() * words.length)
    selectedWord = words[selector]
    renderWord();
}

function renderWord() {
    //actual letter
    let letters = []
    for (let i = 0; i < selectedWord.length; i++) {
        letters.push(selectedWord.charAt(i));
    }

    // letterTag elements
    let letterTags = []
    letters.map((letter, i )=> {
        let letterNode = document.createTextNode(letter)
        let letterTag = document.createElement('h1')
        letterTag.appendChild(letterNode)
        letterTag.id = letterTag.textContent
        letterTag.style.display = "none"
        document.getElementById('answer-container').appendChild(letterTag)
        letterTags.push(letterTag)
    })

    return letterTags;
}

function displayLetter(selectedLetter) {

    for (let i = 0; i < selectedWord.length; i++) {
        selectedWord.includes(selectedLetter) ? document.getElementById(selectedLetter).style.display = "block" : console.log('no')
    }
}


function checkWord(letter) {
    if (selectedWord.includes(letter)) {
        console.log('Correct')
        confirmChoice(letter)
        hideSelectedButton(letter)
    } else {
        console.log('Wrong letter')
    }
}

function hideSelectedButton(letter) {
    let button = document.getElementById(`letter-${letter}`)
    console.log(`Hide letter ${letter}`)
    button.style.display = "none";
}

function confirmChoice (letter) {
    // const letterNode = document.createTextNode(letter)
    // const letterTag = document.createElement('p').appendChild(letterNode)
    // document.getElementById('answer-container').appendChild(letterTag)

    // if (selectWord().includes(letter)) {
    //     console.log('works')
    //
    // }


    // console.log('fadvsad' + selectWord(words))
}

// have selectedWord hidden from view but Make each letter appear as choice is confirmed
