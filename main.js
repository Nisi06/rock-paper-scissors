
function computerChoice() {
    let choices = ["Rock" , "Paper" , "Scissors"];
    let compChoice = choices[Math.floor(Math.random() * 3)];
    return compChoice.toUpperCase();
}


function playerChoice() {
    let yourChoice = prompt("Please choose 'Rock' or 'Paper' or 'Scissors'.");
    return yourChoice.toUpperCase();
}


let computerSelection = computerChoice();
let playerSelection = playerChoice();


function game(playerSelection, computerSelection){

    if(computerSelection == playerSelection) {
        return "It's a tie!";
    } else if(
        (computerSelection == "ROCK" && playerSelection == "SCISSORS")
        || (computerSelection == "PAPER" && playerSelection == "ROCK")
        || (computerSelection() == "SCISSORS" && playerSelection == "PAPER")) {
            return `You lost! ${computerSelection} beats ${playerSelection}!`;
    } else {
        return `You win! ${playerSelection} beats ${computerSelection}!`
    }
}


let computerScore = 0;
let playerScore = 0;

console.log(game(playerSelection, computerSelection));



