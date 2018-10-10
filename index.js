//required files to export from
var word = require("./word.js");
//npm install requirements
var inquirer = require("inquirer");
//big ol' array of possible words
var wordyWords = ["Anahiem Ducks", "Arizona Coyotes", "Boston Bruins", "Buffalo Sabres", "Calgary Flames", "Carolina Hurricanes", "Chicago Blackhawks", "Colorado Avalanche", "Columbus Blue Jackets", "Dallas Stars","Detroit Red Wings", "Edmonton Oilers", "Florida Panthers", "Los Angeles Kings", "Minnesota Wild", "Montreal Canadiens", "Nashville Predators", "New Jersey Devils", "New York Islanders", "New York Rangers", "Ottawa Senators", "Philadelphia Flyers", "Pittsburgh Penguins", "San Jose Sharks", "St. Louis Blues", "Tampa Bay Lightning", "Toronto Maple Leafs", "Vancouver Canucks", "Vegas Golden Knights", "Washington Capitals","Winnipeg Jets"];

//game variables
var guess;
var randWord;
var word;
var pickedWord;

function start()
{
    randWord = [];
    console.log("It's puck drop time! What NHL team will you guess?");
    console.log("--------------------------------------------------");
    gamestart();
}
//gamestart function
function gameStart()
{
    pickedWord = "";
    guess = 20;
    if(pickedWord.length < wordyWords.length)
    {
        pickedWord = getWord();
    } else {
        //Win Condition
        console.log("Now lift the Cup and take a victory lap");
        continuePrompt();
    }
    if(pickedWord)
    {
        word = new word(pickedWord);
        word.makeLetters();
        makeGuess();
    }
}
//get word function
function getWord()
{
    var rand = Math.floor(Math.random() * wordyWords.length);
    var randWord = wordyWords[rand];
    if(randWord.indexof(rand)=== -1)
    {
        randWord.push(randomWord);
        return randomWord;
    } else {
        return getWord();
    }
}

//makeGuess function
function makeGuess()
{
    var letterGuess = [];
    inquirer.prompt([
        {
            name: "guessedLetter",
            message: word.update() + "\nGuess a letter!" + "\nGuesses left: " + guess
        }
    ])
    .then(data => {
        word.letters.forEach(letter => 
            {
                letter.checkletter(data.guessedletter);
                letterGuess.pus(letter.getCharacters());
            });
            if(guess > 0 && letterGuess.indexOf("___")!== -1){
                guess--;
                if(guess === 0)
                {
                    console.log("Game Over, better luck next season!");
                    continuePrompt();
                } else {
                    makeGuess();
                }
            } else {
                console.log("You got it! Now take a victory lap with the cup!");
                console.log(word.update());
                gameStart();
            }
    });
}
//asking user if they want to play again or quit
function continuePrompt()
{
    inquirer.prompt([
        {
            name: "continue",
            type: "list",
            message: "Would you like to play again?",
            choices: ["Yes", "No"]
        }
    ]).then(data => {
        if(data.continue === "Yes")
        {
            start();
        } else {
            console.log("Thank you for playing!");
        }
    })
}