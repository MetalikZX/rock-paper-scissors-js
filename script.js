function getComputerChoice() {
    let numChoice = Math.random();
    if (numChoice <= 0.33) {
        return "rock";
    }
    else if (numChoice <= 0.66) {
        return "scissors";
    }
    else {
        return "paper";
    }
}
function getHumanChoice() {
let humanChoice = prompt("Enter your choice!");
humanChoice = humanChoice.toLowerCase()
if (humanChoice === "rock" || humanChoice === "paper" || humanChoice === "scissors") {
    return humanChoice;
} else {
    console.log("Invalid input!")
}
}
let humanScore = 0;
let computerScore = 0;

let round = 0;
function playGame() {
    const {result, humanChoice, computerChoice} = playRound();

if (result === "Win") {
  humanScore += 1;
  console.log ("You win!", humanChoice, "beats", computerChoice,"!");
  console.log ("Your score:", humanScore);
  console.log ("Computer's score:", computerScore);
}

if (result === "Lose") {
  computerScore += 1;
  console.log ("You lose!", computerChoice, "beats", humanChoice,"!");
  console.log ("Your score:", humanScore);
  console.log ("Computer's score:", computerScore);
}

if (result === "Tie") {
    console.log("It's a tie!")
    console.log ("Your score:", humanScore);
    console.log ("Computer's score:", computerScore);
}
round += 1
}

function playRound() {
    const humanChoice = getHumanChoice();
    const computerChoice = getComputerChoice();
    let result
    console.log("Human choice:", humanChoice);
console.log("Computer choice:", computerChoice);
    if (humanChoice === "rock" && computerChoice === "rock") {
  result = "Tie";
} else if (humanChoice === "rock" && computerChoice === "paper") {
  result = "Lose";
} else if (humanChoice === "rock" && computerChoice === "scissors") {
  result = "Win";
}
if (humanChoice === "paper" && computerChoice === "rock") {
  result = "Win";
} else if (humanChoice === "paper" && computerChoice === "paper") {
  result = "Tie";
} else if (humanChoice === "paper" && computerChoice === "scissors") {
  result = "Lose";
}
if (humanChoice === "scissors" && computerChoice === "rock") {
  result = "Lose";
} else if (humanChoice === "scissors" && computerChoice === "paper") {
  result = "Win";
} else if (humanChoice === "scissors" && computerChoice === "scissors") {
  result = "Tie";
}
return {result, humanChoice, computerChoice};
}

for ( let round = 1; round < 5; round++) {
    console.log("Round", round);
    playGame();
}
if (humanScore > computerScore) {
    console.log("You win the game!");
} else if (computerScore > humanScore) {
    console.log("Computer won the game!");
} else {
    console.log("It's a complete tie!");
}