const words = ['HELLO', 'TEST', 'HANGMAN', 'FOOTBALL', 'BANANA', 'GOAT', 'FISH', 'BOWLING'];

// Add categories for words and button to select

// State
let answer;
let counter = 0;

window.onload = function () {
    selectWord(words)
    console.log(answer)
}

// Selects a letter from onClick event
letterSelected = (event) => {
    let selectedLetter = event.target.innerHTML
    checkForMatch(selectedLetter)
}


selectWord = (words) => {
    let selector = Math.floor(Math.random() * words.length)
    answer = words[selector]
    addAnswerToDOM();
}

addAnswerToDOM = () => {
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

displayLetter = (selectedLetter) => {
    for (let i = 0; i < answer.length; i++) {
        answer.includes(selectedLetter) ? document.querySelectorAll(`.${selectedLetter}`).forEach(el => {
            el.style.visibility = "visible"
        }) : null
    }
}

checkForMatch = (letter) => {
    if (answer.includes(letter)) {
        hideSelectedButton(letter)
        displayLetter(letter)
    } else {
        const canvas = document.getElementById('hangman')
        const context = canvas.getContext("2d");
        draw(context, counter)
        incorrectCounter()

    }
}

hideSelectedButton = (letter) => {
    let button = document.getElementById(`letter-${letter}`)
    button.style.display = "none";

    console.log(`Hide letter ${letter}`)
}

incorrectCounter = () => {
    counter += 1;
    console.log(counter)

    if (counter === 9) {
        alert('You Loose')
    }
}

resetGame = () => {
    counter = 0
    console.log('game reset')
}

draw = (context, score) => {
    switch (score) {
        case 0 :
            context.strokeStyle = '#444';
            context.lineWidth = 10;
            context.beginPath();
            context.moveTo(175, 225);
            context.lineTo(5, 225);
            context.moveTo(25, 225);
            context.lineTo(25, 5);
            context.lineTo(100, 5);
            context.lineTo(100, 25);
            context.stroke();
            break;

        case 1:
            context.lineWidth = 5;
            context.beginPath();
            context.arc(100, 50, 25, 0, Math.PI * 2, true);
            context.closePath();
            context.stroke();
            break;

        case 2:
            context.beginPath();
            context.moveTo(100, 75);
            context.lineTo(100, 140);
            context.stroke();
            break;

        case 3:
            context.beginPath();
            context.moveTo(100, 85);
            context.lineTo(60, 100);
            context.stroke();
            break;

        case 4:
            context.beginPath();
            context.moveTo(100, 85);
            context.lineTo(140, 100);
            context.stroke();
            break;

        case 5:
            context.beginPath();
            context.moveTo(100, 140);
            context.lineTo(80, 190);
            context.stroke();
            break;

        case 6:
            context.beginPath();
            context.moveTo(82, 190);
            context.lineTo(70, 185);
            context.stroke();
            break;

        case 7:
            context.beginPath();
            context.moveTo(100, 140);
            context.lineTo(125, 190);
            context.stroke();
            break;

        case 8:
            context.beginPath();
            context.moveTo(122, 190);
            context.lineTo(135, 185);
            context.stroke();
            break;
    }

}
