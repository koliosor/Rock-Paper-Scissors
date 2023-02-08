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
console.log(getComputersChoice());

function playRound(computersChoice, playerSelection) {
  playerSelection.toLowerCase();
  if (playerSelection === "rock") {
    if (computersChoice === "rock") {
      return `Player selected ${playerSelection} and computer ${computersChoice} its a tie`;
    } else if (computersChoice === "scissors") {
      return `Player selected ${playerSelection} and computer ${computersChoice} player wins`;
    } else if (computersChoice === "paper") {
      return `Player selected ${playerSelection} and computer ${computersChoice} computer wins`;
    }
  } else if (playerSelection === "scissors") {
    if (computersChoice === "scissors") {
      return `Player selected ${playerSelection} and computer ${computersChoice} its a tie`;
    } else if (computersChoice === "rock") {
      return `Player selected ${playerSelection} and computer ${computersChoice} player wins`;
    } else if (computersChoice === "paper") {
      return `Player selected ${playerSelection} and computer ${computersChoice} computer wins`;
    }
  } else {
    if (computersChoice === "paper") {
      return `Player selected ${playerSelection} and computer ${computersChoice} its a tie`;
    } else if (computersChoice === "rock") {
      return `Player selected ${playerSelection} and computer ${computersChoice} player wins`;
    } else if (computersChoice === "scissors") {
      return `Player selected ${playerSelection} and computer ${computersChoice} computer wins`;
    }
  }
}
console.log(playRound(getComputersChoice(), "scissors"));
// function game(){
//     for (let i=0; i<5; i++){

//     }
// }
