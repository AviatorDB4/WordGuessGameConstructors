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
function gamestart()
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
//function getWord()
//{
//    var rand = Math.floor(Math.random() * wordyWords.length);
//    var randWord = wordyWords[rand];
//    if(randWord.indexof(rand)=== -1)
//}