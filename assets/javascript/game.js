// Create an array to store the words that users must guess.
var words = ["taliyah", "yasuo", "sejuani"];

// Create variable to keep track of remaining guesses and number of wins.
var remainingGuesses = 12;
var wins = 0;
var notInWord = [];


// Start the game
function startGame(){
    // Take the first word and create blanks for each letter in the word.
    for (i = 0; i < words[0].length; i++) {
        words[0] = words[0].replace(words[0].charAt(i), "_");
    }
    var blankWord = words[0].split();
    // Write the blanks in the html and set remaining guesses to 12.
    document.getElementById("currentWord").innerHTML = blankWord;
    document.getElementById("guessesLeft").innerHTML = "Guesses remaining: " + remainingGuesses;
}

startGame();



// This function is run whenever a user presses a key.
document.onkeyup = function (event) {

// Store the user's guess of a letter in a variable.
var userGuess = event.key;





}

