"use strict"

//HTTP - hypertext transfer protocol
//Request - What do we want to do
//Response - What is actually done

const guessedLettersElem = document.querySelector("#guessed-letters")
const puzzleElem = document.querySelector("#puzzle")
const guessesElem = document.querySelector("#remaining-guesses")
let wordAmount = "1"
let guessesAmount = 3
let game

const startGame = async (wordAmount, guessesAmount) => {
    const puzzle = await getPuzzleAsync(wordAmount)
    game = new Hangman(puzzle, guessesAmount)
    render()
}

const render = () => {
    puzzleElem.innerHTML = ""
    game.puzzle.forEach((letter) => {
        const letterElem = document.createElement("span")
        letterElem.textContent = letter
        puzzleElem.appendChild(letterElem)
    })
    guessedLettersElem.textContent = `Guessed letters: ${game.guessedLetters}`
    guessesElem.textContent = game.statusMessage
}

startGame(wordAmount, guessesAmount)

document.querySelector("#reset").addEventListener("click", () => {
    startGame(wordAmount, guessesAmount)
})

document.querySelector("#select-word-amount").addEventListener("change", (e) => {
    wordAmount = e.target.value
    if (wordAmount === "1") {
        guessesAmount = 3
    } else if (wordAmount === "2") {
        guessesAmount = 5
    } else if (wordAmount === "3") {
        guessesAmount = 7
    } else {
        console.log("Something went wrong!")
    }
    startGame(wordAmount, guessesAmount)
})

window.addEventListener("keypress", function (e) {
    if (e.charCode > 96 || e.charCode < 123) {
        const guess = String.fromCharCode(e.charCode)
        game.makeGuess(guess)
        render()
    }
})