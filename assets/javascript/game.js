// Create an array to store the words that users must guess.
var words = ["a l a d d i n", "s i m b a", "r a p u n z e l"];
var images = ["https://vignette.wikia.nocookie.net/disney/images/e/eb/Aladdin_Pose.png/revision/latest?cb=20170912124813", "http://pngimg.com/uploads/lion_king/lion_king_PNG69.png", "https://vignette.wikia.nocookie.net/disney/images/8/82/Rapunzel_pose.png/revision/latest?cb=20160209032533"];

// Define variables.
var wordIndex = 0;
var remainingGuesses = 8;
var wins = 0;
var losses = 0;
var notInWord = [];
var currentWord = '';
var wordAsArray = [];
var wordToGuess = makeArray(words[0]);
var restartGame = false;

// FUNCTIONS
// =============================================================================
// Create function that takes a word and replaces each letter to be a blank.
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
    restartGame = false;
    
}

function changeWord(string) {
    wordAsArray = makeArray(string);
    wordAsArray.fill("_", 0, wordAsArray.length);
    currentWord = makeString(wordAsArray);
    displayCurrentWord(currentWord);
    wordToGuess = makeArray(string);
}

function restartRound(string) {
    remainingGuesses = 8;
    document.getElementById("guessesLeft").innerHTML = "Guesses remaining: " +remainingGuesses;
    notInWord = [];
    document.getElementById("lettersGuessed").innerHTML = "Letters already guessed: " + notInWord;
    wordAsArray = makeArray(string);
    wordAsArray.fill("_", 0, wordAsArray.length);
    currentWord = makeString(wordAsArray);
    displayCurrentWord(currentWord);
    document.getElementById("numOfWins").innerHTML = "Wins: " + wins;
    restartGame = false;

}


// Play Game
// =============================================================================
startGame(words[wordIndex]);


// This function is run whenever a user presses a key.
document.onkeyup = function (event) {
    
    if(restartGame !== true){
        // Store the user's guess of a letter in a variable.
        var userGuess = event.key.toLowerCase();
        var alphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

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
                restartGame = true;
            }
        }

        // Checks to see if all the letters have been correctly guessed and then changes the word.
        if ((currentWord === makeString(wordToGuess)) && wordIndex < words.length) {
            document.getElementById("charImage").src = images[wordIndex];
            document.getElementById("charName").innerHTML = words[wordIndex];
            wins ++;
            document.getElementById("numOfWins").innerHTML = "Wins: " + wins;
            document.getElementById("numOfLosses").innerHTML = "Losses: " + losses;
            wordIndex ++;
            remainingGuesses = 8;
            document.getElementById("guessesLeft").innerHTML = "Guesses remaining: " +remainingGuesses;
            notInWord = [];
            document.getElementById("lettersGuessed").innerHTML = "Letters already guessed: " + notInWord;
            changeWord(words[wordIndex]); 
          
        }
        else if (wordIndex >= words.length) {
            document.querySelector("body").innerHTML = "<p id='winScreen'>Congratulations! You have correctly guessed all of the characters!</p>";
        }
    }
    
    else if (restartGame){
        losses ++;
        document.getElementById("numOfLosses").innerHTML = "Losses: " + losses;
        restartRound(words[wordIndex]);  
    }
}   



