/*
0 == Rock
1 == Paper
2 == Scissors
*/


let playerScore = 0;
let computerScore = 0;

function getComputerChoice() {
    let randomChoice = Math.floor(Math.random() * 3);

    if (randomChoice == 0) {
        return "rock";
    } else if (randomChoice == 1){
        return "paper";
    } else {
        return "scissors";
    }
}


function getPlayerChoice() {
    let playerChoice = prompt("Please enter Rock, Paper or Scissors");
    return playerChoice.toLowerCase();
}

// console.log(getPlayerChoice());


function game(playerSelection, computerSelection){
    playerSelection = getPlayerChoice();
    computerSelection = getComputerChoice();
    
}

console.log(getComputerChoice());
// console.log(game(playerSelection, computerSelection));