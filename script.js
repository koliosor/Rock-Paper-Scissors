let playerScore = 0;
let computerScore = 0;
let tieScore = 0;
const livefeed = document.querySelector(".feed");
const display = document.querySelector(".display");
const retryButton = document.querySelector("#restart");
const buttons = document.querySelectorAll(".wrap button");
const rock = document.querySelector("#rock");
const paper = document.querySelector("#paper");
const scissors = document.querySelector("#scissors");
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
      tieScore++;
      displayBoard(`Player chose ✊ computer chose ✊`);
    } else if (computersChoice === "scissors") {
      playerScore++;
      displayBoard(`Player chose ✊ computer chose ✌`);
    } else if (computersChoice === "paper") {
      computerScore++;
      displayBoard(`Player chose ✊ computer chose ✋`);
    }
  } else if (playerSelection === "scissors") {
    if (computersChoice === "scissors") {
      tieScore++;
      displayBoard(`Player chose ✌ computer chose ✌`);
    } else if (computersChoice === "rock") {
      computerScore++;
      displayBoard(`Player chose ✌ computer chose ✊`);
    } else if (computersChoice === "paper") {
      playerScore++;
      displayBoard(`Player chose ✌ computer chose ✋ `);
    }
  } else {
    if (computersChoice === "paper") {
      tieScore++;
      displayBoard(`Player chose ✋ computer chose ✋ `);
    } else if (computersChoice === "rock") {
      playerScore++;
      displayBoard(`Player chose ✋ computer chose ✊`);
    } else if (computersChoice === "scissors") {
      computerScore++;
      displayBoard(`Player chose ✋ computer chose ✌`);
    }
  }
  updateScore();
};

function updateScore() {
  const playerHtmlScore = document.querySelector(".player-score");
  const computerHtmlScore = document.querySelector(".computer-score");
  playerHtmlScore.innerHTML = `Player Score:  ${playerScore}`;
  computerHtmlScore.innerHTML = `Computer Score: ${computerScore}`;
}

start.addEventListener("click", startGame);
function startGame() {
  if (isGameOver()) {
    stopGame();

    return;
  }

  // clearList();

  paper.addEventListener("click", handleclick);
  rock.addEventListener("click", handleclick);
  scissors.addEventListener("click", handleclick);
  retryButton.addEventListener("click", restart);
}

function restart() {
  playerScore = 0;
  computerScore = 0;
  tieScore = 0;
  updateScore();
  clearList();
}
function handleclick(e) {
  const choice = e.target.id;
  // console.log(e.target.textContent);
  if (isGameOver()) {
    stopGame();
    displayResult();
  }
  playRound(getComputersChoice(), choice);
}

function isGameOver() {
  return playerScore >= 5 || computerScore >= 5;
}

function displayMessage(str) {
  livefeed.animate([{ opacity: 0 }, { opacity: 1 }], {
    duration: 300,
    fill: "forwards",
    iterations: 1,
    delay: 1,
    easing: "ease-out",
  });
}

function displayBoard(str) {
  display.innerHTML = str;
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
  display.innerHTML = "";
  livefeed.innerHTML = "";
}

function resetScore() {
  playerScore = 0;
  computerScore = 0;
  tieScore = 0;
}

function stopGame() {
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
  console.log(heading);
  livefeed.appendChild(heading);
}
