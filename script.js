let playerScore = 0;
let computerScore = 0;
let tieScore = 0;
let gameFinished = false;
const livefeed = document.querySelector(".feed");

const buttons = document.querySelectorAll(".wrap button");
const rock = document.querySelector(".rock");
const paper = document.querySelector(".paper");
const scissors = document.querySelector(".scissors");
const start = document.querySelector("#start");
const reset = document.querySelector("#reset");

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
      ++tieScore;

      displayMessage(
        `Player selected ${playerSelection} and computer ${computersChoice} its a tie.`
      );
    } else if (computersChoice === "scissors") {
      ++playerScore;
      displayMessage(
        `Player selected ${playerSelection}. Computer chose ${computersChoice}. Player wins the round.`
      );
    } else if (computersChoice === "paper") {
      ++computerScore;
      displayMessage(
        `Player selected ${playerSelection}. Computer chose ${computersChoice}. Computer wins the round.`
      );
    }
  } else if (playerSelection === "scissors") {
    if (computersChoice === "scissors") {
      tieScore++;
      displayMessage(
        `Player selected ${playerSelection} and computer ${computersChoice} its a tie.`
      );
    } else if (computersChoice === "rock") {
      ++computerScore;
      displayMessage(
        `Player selected ${playerSelection}. Computer chose ${computersChoice}. Computer wins the round.`
      );
    } else if (computersChoice === "paper") {
      ++playerScore;
      displayMessage(
        `Player selected ${playerSelection}. Computer chose ${computersChoice}. Player wins the round.`
      );
    }
  } else {
    if (computersChoice === "paper") {
      tieScore++;
      displayMessage(
        `Player selected ${playerSelection} and computer ${computersChoice} its a tie.`
      );
    } else if (computersChoice === "rock") {
      ++playerScore;
      displayMessage(
        `Player selected ${playerSelection}. Computer chose ${computersChoice} Player wins the round`
      );
    } else if (computersChoice === "scissors") {
      ++computerScore;
      displayMessage(
        `Player selected ${playerSelection}. Computer chose ${computersChoice}. Computer wins the round`
      );
    }
  }
};

start.addEventListener("click", startGame);
function startGame() {
  if (isGameOver()) {
    return;
  }
  if (livefeed.childNodes.length == 1) {
    livefeed.removeChild(livefeed.lastChild);
  }
  paper.addEventListener("click", handleclick);
  rock.addEventListener("click", handleclick);
  scissors.addEventListener("click", handleclick);
  reset.addEventListener("click", resetGame);
}

function handleclick(e) {
  const choice = e.target.classList[0];
  // console.log(e.target.textContent);
  if (isGameOver()) {
    displayResult();
    resetGame();
    clearList();
  }
  playRound(getComputersChoice(), choice);
}

function isGameOver() {
  return playerScore === 4 || computerScore === 4;
}

// buttons.forEach((button) => {
//    button.addEventListener("click", handleclick);
//  });

function displayMessage(str) {
  livefeed.animate([{ opacity: 0 }, { opacity: 1 }], {
    duration: 300,
    fill: "forwards",
    iterations: 1,
    delay: 1,
    easing: "ease-out",
  });
  const paragraph = createParagraph();
  paragraph.textContent = str;

  livefeed.appendChild(paragraph);
}

function createParagraph() {
  const par = document.createElement("p");

  return par;
}

function createHeading() {
  const heading = document.createElement("h1");
  return heading;
}

function clearList() {
  // console.log(livefeed.children);
  let paragraph = livefeed.querySelectorAll("p");
  for (let i = 0; i <= paragraph.length; i++) {
    livefeed.removeChild(paragraph[i]);
  }
}

function resetGame() {
  playerScore = 0;
  computerScore = 0;
  tieScore = 0;
  paper.removeEventListener("click", handleclick);
  rock.removeEventListener("click", handleclick);
  scissors.removeEventListener("click", handleclick);
}

function displayResult() {
  const heading = createHeading();

  if (playerScore > computerScore) {
    heading.textContent = "Player wins the  Game.";
  } else if (computerScore > playerScore) {
    heading.textContent = "Computer wins the Game.";
  }
  livefeed.appendChild(heading);
}
