// Create an array to store the words that users must guess.
var words = ["taliyah", "yasuo", "sejuani"];
var currentWord = words[0];

// Create variable to keep track of remaining guesses and number of wins.
var remainingGuesses = 12;
var wins = 0;
var notInWord = [];

// Create function that takes a word and replaces each letter to be a blank.
function displayBlanks(string) {
    for (i = 0; i < string.length; i++) {
        string = string.replace(string.charAt(i), "_");
    }
        var result = string;
        return result;
}

// Start the game function
function startGame(string){
    var wordAsBlanks = displayBlanks(string);
    // Write the blanks in the html for the first word and set remaining guesses to 12.
    document.getElementById("currentWord").innerHTML = wordAsBlanks;
    document.getElementById("guessesLeft").innerHTML = "Guesses remaining: " + remainingGuesses;
}

// Play Game
// ========================================================
startGame(currentWord);



// This function is run whenever a user presses a key.
document.onkeyup = function (event) {

// Store the user's guess of a letter in a variable.
var userGuess = event.key.toLowerCase();

    if(userGuess !== currentWord.charAt(i)) {
        remainingGuesses --;
        document.getElementById("guessesLeft").innerHTML = "Guesses remaining: " + remainingGuesses;
        notInWord.push(userGuess);
        document.getElementById("lettersGuessed").innerHTML = "Incorrect Guesses: " + notInWord;
     }
        
  

}

