let cardsEl = document.getElementById("cards");
let sumEl = document.getElementById("sum");
let messageEl = document.getElementById("message");
let startBtn = document.getElementById("start-game");
let newCardBtn = document.getElementById("new-card");

let cards = [];
let sum = 0;
let hasBlackJack = false;
let isAlive = false;

function randomCard() {
  let randomNumber = Math.floor(Math.random() * 13) + 1;
  if (randomNumber > 10) {
    return 10;
  } else if (randomNumber === 1) {
    return 11;
  } else {
    return randomNumber;
  }
}

function startGame() {
  isAlive = true;
  hasBlackJack = false;
  cards = [];
  sum = 0;

  let firstCard = randomCard();
  let secondCard = randomCard();

  cards.push(firstCard, secondCard);
  sum = firstCard + secondCard;

  renderGame();
}

function newCard() {
  if (isAlive && !hasBlackJack) {
    let card = randomCard();
    cards.push(card);
    sum += card;
    renderGame();
  }
}

function renderGame() {
  cardsEl.textContent = "Cards: ";

  for (let i = 0; i < cards.length; i++) {
    cardsEl.textContent += cards[i] + " ";
  }

  sumEl.textContent = "Sum: " + sum;

  if (sum < 21) {
    messageEl.textContent = "Do you want to draw a new card?";
  } else if (sum === 21) {
    messageEl.textContent = "You've got Blackjack!";
    hasBlackJack = true;
  } else {
    messageEl.textContent = "You're out of the game!";
    isAlive = false;
  }
}
function resetGame() {
  cards = [];
  sum = 0;
  hasBlackJack = false;
  isAlive = false;
  renderGame();
}
// Initial message
messageEl.textContent = "Click Start Game to begin.";
