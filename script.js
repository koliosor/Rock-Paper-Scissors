let playerScore = 0;
let computerScore = 0;
let gameFinished = false;
const buttons = document.querySelectorAll(".wrap button");
const rock = document.querySelector(".rock");
const paper = document.querySelector(".paper");
const scissors = document.querySelector(".scissors");
const start = document.querySelector(".start");

const getComputersChoice = () => {
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
};

const playRound = (computersChoice, playerSelection) => {
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
};

// rock.addEventListener("click", function playGame() {
//   console.log(playRound(getComputersChoice(), "rock"));

//   if (playerScore == 4 || computerScore == 4) {
//     if (playerScore == 4) {
//       console.log("Player Won The Game");
//       gameFinished = true;
//       playerScore = 0;
//       computerScore = 0;
//       return;
//     } else {
//       console.log("Computer Won The Game");
//       gameFinished = true;
//       playerScore = 0;
//       computerScore = 0;
//       return;
//     }
//   }
// });

buttons.forEach((button) => {
  button.addEventListener("click", handleclick);
});

function handleclick(e) {
  const choice = e.target.classList[0];

  console.log(playRound(getComputersChoice(), choice));
}
