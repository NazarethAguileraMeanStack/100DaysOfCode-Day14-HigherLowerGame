const prompt = require("prompt-sync")({ sigint: true });
const data = require("./data");

function getTwoRandomCelebritiesFromData() {
    fisherYatesShuffle(data);
    let firstCelebrity = data[Math.floor(Math.random() * 7)];
    let secondCelebrity = data[Math.floor(Math.random() * 8) + 7];
    return [firstCelebrity, secondCelebrity];
}

function fisherYatesShuffle(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]]
    }
}



/* ----------------------- Exported Functions ------------------  */

function initIntro(score) {
    console.clear();
    console.log(`Your current score: ${score}`);
    console.log("\n\n");
    console.log("Which celebrity has more Instragram followers?");
    console.log("\n");
}

function displayCelebritiesForUserToDecide() {
    let celebrities = getTwoRandomCelebritiesFromData();
    console.log(`${celebrities[0].Name}: ${celebrities[0].Description} from ${celebrities[0].Country}`);
    console.log("\n");
    console.log("VS.");
    console.log("\n");
    console.log(`${celebrities[1].Name}: ${celebrities[1].Description} from ${celebrities[1].Country}`);
    return celebrities;
}

function promptUserToGuessWinner(celebrities) {
    let userInput = prompt(`Type 'a' for ${celebrities[0].Name} or 'b' for ${celebrities[1].Name}: `);
    return userInput;
}


function determineGuessIsCorrect(userInput, celebrities) {
    if (userInput === "a") {
        if (celebrities[0].Follower_Count > celebrities[1].Follower_Count) {
            console.log(`Correct! ${celebrities[0].Name} has ${celebrities[0].Follower_Count} followers!`);
            return true
        } else {
            return false
        };
    }
    if (userInput === "b") {
        if (celebrities[1].Follower_Count > celebrities[0].Follower_Count) {
            console.log(`Correct! ${celebrities[1].Name} has ${celebrities[1].Follower_Count} followers!`);
            return true
        } else {
            return false
        };
    }
    return false;
}

function displayFinalScore(score) {
    console.clear();
    console.log(`Wrong! Your final Score is ${score}`);
}







exports.initIntro = initIntro;
exports.displayCelebritiesForUserToDecide = displayCelebritiesForUserToDecide;
exports.promptUserToGuessWinner = promptUserToGuessWinner;
exports.determineGuessIsCorrect = determineGuessIsCorrect;
exports.displayFinalScore = displayFinalScore;