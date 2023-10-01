// 1 == Rock
// 2 == Paper
// 3 == Scissors

function getComputerChoice() {
    let choices = ["Rock" , "Paper" , "Scissors"];
    let compChoice = choices[Math.floor(Math.random() * 3)];
    return compChoice;
}

console.log(getComputerChoice);
