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

    const ComputerChoiceDisplay = document.createElement('div');

    const resultDisplay = document.createElement('div');
      
    const rock = document.createElement('button');
    rock.textContent = 'Rock';
    rock.style.marginRight = '15px';
    const paper = document.createElement('button');
    paper.textContent = 'Paper';
    paper.style.marginRight = '15px';
    const scissors = document.createElement('button');
    scissors.textContent = 'Scissors';
    scissors.style.marginRight = '15px';

    gui.append(roundDisplay, yourScoreDisplay, ComputerScoreDisplay, ComputerChoiceDisplay, resultDisplay, rock, paper, scissors);
    
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
if (result === "Win") {
  humanScore += 1;
  resultDisplay.textContent = (`You win in this round!`);
}

if (result === "Lose") {
  computerScore += 1;
  resultDisplay.textContent = (`You lost in this round!`);
}

if (result === "Tie") {
    resultDisplay.textContent = (`It's a tie in this round!`);
}
yourScoreDisplay.textContent = (`Your score: ${humanScore}`);
ComputerScoreDisplay.textContent = (`Computer score: ${computerScore}`);

if (round >= maxRounds) {
  ComputerChoiceDisplay.textContent = (` `);
  roundDisplay.textContent = ('Game Over!')
if (humanScore > computerScore) {
    resultDisplay.textContent = (`You win the game!`);
} else if (computerScore > humanScore) {
    resultDisplay.textContent = (`Computer won the game!`);
} else {
    resultDisplay.textContent = (`It's a complete tie!`);
}
}
}

function playRound() {
    const computerChoice = getComputerChoice();
    let result
    ComputerChoiceDisplay.textContent = (`Computer chose ${computerChoice}`);
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