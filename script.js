// variable to store the list of guesses
let guesses = [];

let correctNumber = getRandomNumber();
console.log('the correct number is:\n' + correctNumber);

window.onload = function() {
    document.getElementById("number-submit").addEventListener("click", playGame);
    document.getElementById("restart-game").addEventListener("click", initGame);
}

// Functionality for playing the whole game 

function playGame(){
    let numberGuess = document.getElementById('number-guess').value; 
    displayResult(numberGuess);
    saveGuessHistory(numberGuess);
    displayHistory();
}

// Show user the result is too high/too low/guessed correctly
function displayResult(numberGuess) {
    if(numberGuess > correctNumber) {
        showNumberAbove();
    }
    else if(numberGuess < correctNumber) {
        showNumberBelow();
    }
    else {
        showYouWon();
    }
}
// Restart a new game

function initGame(){
    correctNumber = getRandomNumber();
    document.getElementById('result').innerHTML = "";
    guesses = [];
    displayHistory();
    console.log("the correct number is:\n" + correctNumber)    
}
function resetResultContent(){
    document.getElementById("result").innerHTML = "";
}
// return a whole number between 1 and 100
function getRandomNumber(){
    let randomNumber = Math.random()
    let wholeNumber = Math.floor(randomNumber * 100) + 1;

    return wholeNumber;
}

//Save Guess history

function saveGuessHistory(guess)
{
    guesses.push(guess);
}

function displayHistory(){
    let index = guesses.length - 1;
    let list = "<ul class ='list-group'>";
    while(index >= 0) {
        list += "<li class= 'list-group-item'>" + "You guessed:" + guesses[index] + "</li>"
        index--;
    }
    list += "</ul"
    document.getElementById("history").innerHTML = list;
}

function getDialog(dialogtype, text) {
    let dialog;
    switch(dialogtype){
        case "warning":
            dialog = "<div class= 'alert alert-warning' role= 'alert'>"
            break;
        case "won":
            dialog = "<div class='alert alert success' role='alert'>"
            break;
    }
    dialog += text;
    dialog += "</div>"
    return dialog;
}

function showNumberAbove(){
    const text = "Your guess is too high!"
    let dialog = getDialog('warning', text);
    document.getElementById("result").innerHTML = dialog;
}

function showNumberBelow(){
    const text = "Your guess is too low!"
    let dialog = getDialog('warning', text);
    document.getElementById("result").innerHTML = dialog;
}

function showYouWon() {
    const text = "Awesome job, you got it!"
    let dialog = getDialog('won', text);
    document.getElementById("result").innerHTML = dialog;
}
