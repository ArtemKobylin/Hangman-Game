"use strict"

//HTTP - hypertext transfer protocol
//Request - What do we want to do
//Response - What is actually done

const guessedLettersElem = document.querySelector("#guessed-letters")
const puzzleElem = document.querySelector("#puzzle")
const guessesElem = document.querySelector("#remaining-guesses")
let game

const startGame = async () => {
    const puzzle = await getPuzzleAsync("2")
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

startGame()

document.querySelector("#reset").addEventListener("click", startGame)

window.addEventListener("keypress", function (e) {
    if (e.charCode > 96 || e.charCode < 123) {
        const guess = String.fromCharCode(e.charCode)
        game.makeGuess(guess)
        render()
    }
})



//get country
getLocationAsync().then((location) => getCountryNameAsync(location.country)).then((country) => {
    console.log(`You are currently in ${country}`)
}).catch((error) => {
    console.log(error)
})

getCurrentCountry().then((country) => {
    console.log(`You are currently in ${country}`)
}).catch((error) => {
    console.log(error)
})