let homeScore = 0;
let guestScore = 0;

let homeBoardEl = document.getElementById("home-board");
let guestBoardEl = document.getElementById("guest-board");

let homeScoreEl = document.getElementById("home-score");
let guestScoreEl = document.getElementById("guest-score");
let resetEl = document.getElementById("reset-btn");
function add1Home() {
  homeScore += 1;
  homeScoreEl.textContent = "Score = " + homeScore;
  updateWinner();
}

function add2Home() {
  homeScore += 2;
  homeScoreEl.textContent = "Score = " + homeScore;
  updateWinner();
}
function add3Home() {
  homeScore += 3;
  homeScoreEl.textContent = "Score = " + homeScore;
  updateWinner();
}

function add1Guest() {
  guestScore += 1;
  guestScoreEl.textContent = "Score = " + guestScore;
  updateWinner();
}

function add2Guest() {
  guestScore += 2;
  guestScoreEl.textContent = "Score = " + guestScore;
  updateWinner();
}
function add3Guest() {
  guestScore += 3;
  guestScoreEl.textContent = "Score = " + guestScore;

  updateWinner();
}

console.log(homeScore, guestScore);
function resetScores() {
  homeScore = 0;
  guestScore = 0;
  homeScoreEl.textContent = "Score = " + homeScore;
  guestScoreEl.textContent = "Score = " + guestScore;
  updateWinner();
}
function updateWinner() {
  if (homeScore > guestScore) {
    homeBoardEl.style.backgroundColor = "green";
    guestBoardEl.style.backgroundColor = "red";
  } else if (guestScore > homeScore) {
    guestBoardEl.style.backgroundColor = "green";
    homeBoardEl.style.backgroundColor = "red";
  } else {
    homeBoardEl.style.backgroundColor = "rgb(127, 255, 185)";
    guestBoardEl.style.backgroundColor = "rgb(127, 255, 185)";
  }
}


