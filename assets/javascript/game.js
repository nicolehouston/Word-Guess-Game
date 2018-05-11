// Create an array to store the words that users must guess.
var words = ["t a l i y a h", "y a s u o", "s e j u a n i"];

// Define variables.
var wordIndex = 0;
var remainingGuesses = 12;
var wins = 0;
var notInWord = [];
var currentWord = '';
var wordAsArray = [];
var wordToGuess = makeArray(words[wordIndex]);

// FUNCTIONS
// =========================================================================================
// Create function that takes a word and replaces each letter to be a blank.
function displayBlanks(string) {
    for (i = 0; i < string.length; i++) {
        string = string.replace(string.charAt(i), "_");
    }
        return string;
}

function makeArray(string) {
    string = string.split(" ");
    return string;
}

function makeString(array) {
    array = array.join(" ");
    return array;
}

function displayCurrentWord(string) {
    document.getElementById("currentWord").innerHTML = string;
} 

// Start the game function
function startGame(string){
    wordAsArray = makeArray(string);
    wordAsArray.fill("_", 0, wordAsArray.length);
    currentWord = makeString(wordAsArray);
    displayCurrentWord(currentWord);
    document.getElementById("guessesLeft").innerHTML = "Guesses remaining: " + remainingGuesses;
    
}

// Play Game
// =============================================================================
startGame(words[wordIndex]);





// This function is run whenever a user presses a key.
document.onkeyup = function (event) {

// Store the user's guess of a letter in a variable.
var userGuess = event.key.toLowerCase();

for(i = 0; i < wordToGuess.length; i++){
    if (userGuess === wordToGuess[i]) {
        wordAsArray = makeArray(currentWord);
        wordAsArray.splice(i, 1, userGuess);
        currentWord = makeString(wordAsArray);
        displayCurrentWord(currentWord);
    }
} 

    if (wordToGuess.indexOf(userGuess) === -1) {
        notInWord.push(userGuess);
        console.log(notInWord);
        document.getElementById("lettersGuessed").innerHTML = notInWord;
    }
}

