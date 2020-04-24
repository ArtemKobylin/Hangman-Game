"use strict"

//HTTP - hypertext transfer protocol
//Request - What do we want to do
//Response - What is actually done

const guessedLettersElem = document.querySelector("#guessed-letters")
const puzzleElem = document.querySelector("#puzzle")
const guessesElem = document.querySelector("#remaining-guesses")
let wordAmount = "1"
let game

const startGame = async (wordAmount) => {
    const puzzle = await getPuzzleAsync(wordAmount)
    game = new Hangman(puzzle, 5)
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

startGame(wordAmount)

document.querySelector("#reset").addEventListener("click", () => {
    startGame(wordAmount)
})

document.querySelector("#select-word-amount").addEventListener("change", (e) => {
    wordAmount = e.target.value
    startGame(wordAmount)
})

window.addEventListener("keypress", function (e) {
    if (e.charCode > 96 || e.charCode < 123) {
        const guess = String.fromCharCode(e.charCode)
        game.makeGuess(guess)
        render()
    }
})