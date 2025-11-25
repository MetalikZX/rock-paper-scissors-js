    let humanScore = 0;
    let computerScore = 0;
    let round = 0;
    const maxRounds = 5;

    const rock = document.createElement('button');
    rock.textContent = 'Rock';
    rock.style.margin = '15px';
    const paper = document.createElement('button');
    paper.textContent = 'Paper';
    paper.style.margin = '15px';
    const scissors = document.createElement('button');
    scissors.textContent = 'Scissors';
    scissors.style.margin = '15px';
    document.body.append(rock, paper, scissors);
    
    const choiceButton = [rock, paper, scissors];
    choiceButton.toLowerCase
    let humanChoice;
    choiceButton.forEach((button) => {
      button.addEventListener('click', () => {
      if (round >= maxRounds) return;
      humanChoice = button.textContent.toLowerCase();
      playGame();
      });
      });

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

function playGame() {
    const {result, humanChoice, computerChoice} = playRound();

  round++;
  console.log(`Round ${round}`);
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
if (round >= maxRounds) {
if (humanScore > computerScore) {
    console.log("You win the game!");
} else if (computerScore > humanScore) {
    console.log("Computer won the game!");
} else {
    console.log("It's a complete tie!");
}
}
}

function playRound() {
    const computerChoice = getComputerChoice();
    let result
    console.log("Human choice:", humanChoice);
console.log("Computer choice:", computerChoice);
if (
    (humanChoice === "rock" && computerChoice === "scissors") ||
    (humanChoice === "paper" && computerChoice === "rock") ||
    (humanChoice === "scissors" && computerChoice === "paper")
  ) {
    result = "Win";
  } else if (humanChoice === computerChoice) {
    result = "Tie";
  } else {
    result = "Lose";
  }
return {result, humanChoice, computerChoice};
}
