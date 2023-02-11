let playerScore = 0;
let computerScore = 0;
let gameFinished = false;
const buttons = document.querySelectorAll(".wrap button");
const rock = document.querySelector(".rock");
const paper = document.querySelector(".paper");
const scissors = document.querySelector(".scissors");
const start = document.querySelector(".start");

function getComputersChoice() {
  let rand = Math.floor(Math.random() * 3);
  let computersChoice;
  if (rand === 0) {
    computersChoice = "rock";
  } else if (rand === 1) {
    computersChoice = "scissors";
  } else {
    computersChoice = "paper";
  }
  return computersChoice;
}

function playRound(computersChoice, playerSelection) {
  if (playerSelection === "rock") {
    if (computersChoice === "rock") {
      return `Player selected ${playerSelection} and computer ${computersChoice} its a tie`;
    } else if (computersChoice === "scissors") {
      playerScore++;
      return `Player selected ${playerSelection} and computer ${computersChoice} player wins`;
    } else if (computersChoice === "paper") {
      computerScore++;
      return `Player selected ${playerSelection} and computer ${computersChoice} computer wins`;
    }
  } else if (playerSelection === "scissors") {
    if (computersChoice === "scissors") {
      return `Player selected ${playerSelection} and computer ${computersChoice} its a tie`;
    } else if (computersChoice === "rock") {
      computerScore++;
      return `Player selected ${playerSelection} and computer ${computersChoice} computer wins`;
    } else if (computersChoice === "paper") {
      playerScore++;
      return `Player selected ${playerSelection} and computer ${computersChoice} player wins`;
    }
  } else {
    if (computersChoice === "paper") {
      return `Player selected ${playerSelection} and computer ${computersChoice} its a tie`;
    } else if (computersChoice === "rock") {
      playerScore++;
      return `Player selected ${playerSelection} and computer ${computersChoice} player wins`;
    } else if (computersChoice === "scissors") {
      computerScore++;
      return `Player selected ${playerSelection} and computer ${computersChoice} computer wins`;
    }
  }
}

// function getPlayersChoice(ask) {
//   ask = prompt("Choose Rock , Paper or Scissors");
//   ask.toLowerCase();
//   while (ask !== "rock" && ask !== "scissors" && ask !== "paper") {
//     ask = prompt("Choose Rock , Paper or Scissors");
//     ask.toLowerCase();
//   }
//   return ask;
// }

rock.addEventListener("click", function () {
  return (choice = "rock");
});
paper.addEventListener("click", function () {
  return (choice = "paper");
});
scissors.addEventListener("click", function () {
  return (choice = "scissors");
});

function playGame() {
  while (computerScore < 4 && playerScore < 4) {
    playRound(getComputersChoice(), getPlayersChoice());
    // console.log(playRound(getComputersChoice(), "scissors"));
  }
  if (playerScore == 4) {
    console.log("Player wins");
    gameFinished = true;
    return;
  } else {
    console.log("Computer wins");
    gameFinished = true;
    return;
  }
}

start.addEventListener("click", playGame());
