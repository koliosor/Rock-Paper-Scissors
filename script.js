const livefeed = document.querySelector(".feed");
/// STATE VARIABLES ///
var game_in_progress = false;
var playerSelection;
var computerChoice;
let amountRounds;
let roundWonBy;
let score = { 'playerScore': 0, 'tieScore': 0, 'computerScore': 0 }

/// CONSTANTS ///
let game_win = {
  rock:     { paper: 1, rock: 0, scissors: 2 },
  paper:    { paper: 0, rock: 2, scissors: 1 },
  scissors: { paper: 2, rock: 1, scissors: 0 },
};
let choicesIcons = {
  rock: "✊",
  paper: "✋",
  scissors: "✌",
};


/// ######################################## ///
///           LOGIC FUNCTIONS                ///
/// ######################################## ///
$('#start').click( function (e) {
	amountRounds = $("#quantity").val();
	if (amountRounds == '') {
		alert('Enter number of rounds');
		return
	} else {
		amountRounds = parseInt($("#quantity").val());
		$('#quantity').addClass('d-none');
		$('#restart').removeClass('d-none');
		$(this).addClass('d-none');
		game_in_progress = true;
	}
})

$('#restart').click(function (e) {
	game_in_progress = true
	score.playerScore = 0;
	score.computerScore = 0;
	score.tieScore = 0;
	updateDisplayScore();
	livefeed.innerHTML = "";
});

// PLAY ROUND FUNCTION
$('.sign').click( function (e) {
	// if game not in progress return
	if (!game_in_progress) { return }

	// get choices
	playerSelection = $(this).attr('id');
	computerChoice = ['rock', 'scissors', 'paper'][ Math.floor(Math.random() * 3) ];

	// game over condition
	if (score['playerScore'] >= amountRounds || score['computerScore'] >= amountRounds) {
		displayResult();
		game_in_progress = false
	} else {
		// game isn't over
		// update score
		roundWonBy = game_win[playerSelection][computerChoice]; // 0 or 1 or 2
		score[ ['tieScore', 'computerScore', 'playerScore'][roundWonBy] ] ++
		updateDisplayScore();
	}
})
/// ######################################## ///

/// ######################################## ///
///           DISPLAY  FUNCTIONS             ///
/// ######################################## ///
function updateDisplayScore() {
	$(".player-score").text(`Player Score:  ${score.playerScore}`);
	$(".computer-score").text(`Computer Score: ${score.computerScore}`);
	$(".tie-score").text(`Tie Score: ${score.tieScore}`);
}

function displayResult() {
	const heading = document.createElement("h1");
	if (score.playerScore > score.computerScore) {
		heading.textContent = "Player wins the  Game.";
	} else if (score.computerScore > score.playerScore) {
		heading.textContent = "Computer wins the Game.";
	}
	livefeed.appendChild(heading);
}

/// ########################################## ///


