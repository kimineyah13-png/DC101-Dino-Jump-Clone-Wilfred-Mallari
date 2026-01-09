const choices = document.querySelectorAll(".choice");
const playerScoreEl = document.getElementById("player-score");
const computerScoreEl = document.getElementById("computer-score");
const resultText = document.getElementById("result-text");
const playerChoiceEl = document.getElementById("player-choice");
const computerChoiceEl = document.getElementById("computer-choice");
const resetBtn = document.getElementById("reset-btn");

let playerScore = 0;
let computerScore = 0;

function getComputerChoice() {
  const choices = ["rock", "paper", "scissors"];
  return choices[Math.floor(Math.random() * 3)];
}

function playRound(playerSelection) {
  const computerSelection = getComputerChoice();

  playerChoiceEl.textContent = `You chose: ${playerSelection}`;
  computerChoiceEl.textContent = `Computer chose: ${computerSelection}`;

  if (playerSelection === computerSelection) {
    resultText.textContent = "It's a tie!";
  } else if (
    (playerSelection === "rock" && computerSelection === "scissors") ||
    (playerSelection === "paper" && computerSelection === "rock") ||
    (playerSelection === "scissors" && computerSelection === "paper")
  ) {
    resultText.textContent = "You win this round!";
    playerScore++;
  } else {
    resultText.textContent = "Computer wins this round!";
    computerScore++;
  }

  playerScoreEl.textContent = playerScore;
  computerScoreEl.textContent = computerScore;

  // Optional: announce grand winner at 5 points
  if (playerScore === 5) {
    alert("Congratulations! You won the game!");
    resetGame();
  } else if (computerScore === 5) {
    alert("Computer wins the game! Try again.");
    resetGame();
  }
}

// Event listeners for choices
choices.forEach(button => {
  button.addEventListener("click", () => {
    playRound(button.dataset.choice);
  });
});

// Reset button
function resetGame() {
  playerScore = 0;
  computerScore = 0;
  playerScoreEl.textContent = playerScore;
  computerScoreEl.textContent = computerScore;
  resultText.textContent = "Make your choice!";
  playerChoiceEl.textContent = "";
  computerChoiceEl.textContent = "";
}

resetBtn.addEventListener("click", resetGame);
