const gameplay = require("./gameplay");

function main() {
    let score = 0;
    let guessIsCorrect = true;

    while (guessIsCorrect) {
        gameplay.initIntro(score);
        let celebrities = gameplay.displayCelebritiesForUserToDecide();
        let userGuess = gameplay.promptUserToGuessWinner(celebrities);
        guessIsCorrect = gameplay.determineGuessIsCorrect(userGuess, celebrities);
        if (guessIsCorrect) score++;
        else break;
    }
    
    gameplay.displayFinalScore(score);
}

main();