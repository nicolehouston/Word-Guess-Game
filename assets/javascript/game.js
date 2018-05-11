// Create an array to store the words that users must guess.
var words = ["a l a d d i n", "s i m b a", "r a p u n z e l"];

// Define variables.
var wordIndex = 0;
var remainingGuesses = 8;
var wins = 0;
var notInWord = [];
var currentWord = '';
var wordAsArray = [];
var wordToGuess = makeArray(words[0]);

// FUNCTIONS
// =============================================================================
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

function changeWord(string) {
    wordAsArray = makeArray(string);
    wordAsArray.fill("_", 0, wordAsArray.length);
    currentWord = makeString(wordAsArray);
    displayCurrentWord(currentWord);
    wordToGuess = makeArray(string);
}

// Play Game
// =============================================================================
startGame(words[wordIndex]);



// This function is run whenever a user presses a key.
document.onkeyup = function (event) {

    // Store the user's guess of a letter in a variable.
    var userGuess = event.key.toLowerCase();
    var alphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "j", "k", "l", "m", "n", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

    // Checks to see if userGuess equals a letter in the word to guess and then displays revealed letters.
    for(i = 0; i < wordToGuess.length; i++){
        if (userGuess === wordToGuess[i]) {
            wordAsArray = makeArray(currentWord);
            wordAsArray.splice(i, 1, userGuess);
            currentWord = makeString(wordAsArray);
            displayCurrentWord(currentWord);
        }
    } 

    // If a guessed letter is not in the word, then the letter gets added to the "letters guessed" list and remaining guesses decreases by one
    if ((wordToGuess.indexOf(userGuess) === -1) && (notInWord.indexOf(userGuess) === -1) && (alphabet.indexOf(userGuess) !== -1)) {
        remainingGuesses --;
        document.getElementById("guessesLeft").innerHTML = "Guesses remaining: " +remainingGuesses;
        notInWord.push(userGuess);
        document.getElementById("lettersGuessed").innerHTML = "Letters already guessed: " + notInWord;

        if (remainingGuesses === 0) {
            document.querySelector("body").innerHTML = "Sorry, you are out of guesses! Better luck next time!";
            
        }
    }

    // Checks to see if all the letters have been correctly guessed and then changes the word.
    if ((currentWord === makeString(wordToGuess)) && wordIndex < words.length) {
        wins ++;
        document.getElementById("numOfWins").innerHTML = "Wins: " + wins;
        wordIndex ++;
        remainingGuesses = 8;
        document.getElementById("guessesLeft").innerHTML = "Guesses remaining: " +remainingGuesses;
        notInWord = [];
        document.getElementById("lettersGuessed").innerHTML = "Letters already guessed: " + notInWord;
        changeWord(words[wordIndex]);   
    }
    else if (wordIndex >= words.length) {
        document.querySelector("body").innerHTML = "Congratulations! You have correctly guessed all of the characters!";
    }
    
}



