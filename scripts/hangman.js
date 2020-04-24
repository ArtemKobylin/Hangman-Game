"use strict"

class Hangman {
    constructor(word, remainingGuesses) {
        this.word = word.toLowerCase().split("")
        this.guessedLetters = []
        this.remainingGuesses = remainingGuesses
        this.status = "playing"
    }
    updateStatus() {
        const finished = this.word.every(letter => this.guessedLetters.includes(letter) || letter === " ")
        if (this.remainingGuesses === 0) {
            this.status = "failed"
        }
        else if (finished) {
            this.status = "finished"
        }
    }
    makeGuess(guess) {
        guess = guess.toLowerCase()
        const isUnique = !this.guessedLetters.includes(guess)
        const isBadGuess = !this.word.includes(guess)
        if (this.status !== "playing") {
            return
        }
        //the code below won´t be executed unless "playing"
        if (isUnique) {
            this.guessedLetters.push(guess)
        }
        if (isUnique && isBadGuess) {
            this.remainingGuesses--
        }
        this.updateStatus()
    }
    get statusMessage() {
        if (this.status === "finished") {
            return "Great job! You have guessed the word."
        }
        else if (this.status === "failed") {
            return `Nice try! The word was "${this.word.join("")}".`
        }
        else {
            return `Guesses left: ${this.remainingGuesses}`
        }
    }
    get puzzle() {
        // let puzzle = ""
        // this.word.forEach(letter => {
        //     if (this.guessedLetters.includes(letter) || letter === " ") {
        //         puzzle += letter
        //     }
        //     else {
        //         puzzle += "*"
        //     }
        // })
        let puzzle = []
        this.word.forEach((letter, index) => {
            if (this.guessedLetters.includes(letter) || letter === " ") {
                puzzle[index] = letter
            }
            else {
                puzzle[index] = "*"
            }
        })
        return puzzle
    }
}





