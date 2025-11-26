    let humanScore = 0;
    let computerScore = 0;
    let round = 1;
    const maxRounds = 6;

    const gui = document.createElement('div');
    document.body.append(gui);
    gui.style.margin = '150px';

    const roundDisplay = document.createElement('div');
    roundDisplay.textContent = ('Choose your move!')

    const yourScoreDisplay = document.createElement('div');
    yourScoreDisplay.textContent = (`Your score: ${humanScore}`);

    const ComputerScoreDisplay = document.createElement('div');
    ComputerScoreDisplay.textContent = (`Computer score: ${computerScore}`);
    
    const rock = document.createElement('button');
    rock.textContent = 'Rock';
    rock.style.marginRight = '15px';
    const paper = document.createElement('button');
    paper.textContent = 'Paper';
    paper.style.marginRight = '15px';
    const scissors = document.createElement('button');
    scissors.textContent = 'Scissors';
    scissors.style.marginRight = '15px';

    gui.append(roundDisplay, yourScoreDisplay, ComputerScoreDisplay, rock, paper, scissors);
    
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
  roundDisplay.textContent = `Round: ${round}`;
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
yourScoreDisplay.textContent = (`Your score: ${humanScore}`);
ComputerScoreDisplay.textContent = (`Computer score: ${computerScore}`);

if (round >= maxRounds) {
  roundDisplay.textContent = ('Game Over!')
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
