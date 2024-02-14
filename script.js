"use strict";
// random num 1 to 20
let secretNumber = Math.trunc(Math.random() * 20) + 1;

let score = 20;

let highscore = 0;

const displayMessage = function (message) {
  document.querySelector(".message").textContent = message;
};

const guessNumber = function (number) {
  document.querySelector(".guess").value = number;
};

const guessSecret = function (secretNumber) {
  document.querySelector(".number").textContent = secretNumber;
};

const numberScore = function (score) {
  document.querySelector(".score").textContent = score;
};

const background = function (color) {
  document.querySelector("body").style.backgroundColor = color;
};

document.querySelector(".check").addEventListener("click", function () {
  const guess = Number(document.querySelector(".guess").value);

  // no input
  if (!guess) {
    displayMessage("No number!");

    // win
  } else if (guess === secretNumber) {
    displayMessage("Correct Number!");
    background("#60b347");
    guessSecret(secretNumber);

    if (score > highscore) {
      highscore = score;
      document.querySelector(".highscore").textContent = highscore;
    }
    //num too high and too low
  } else if (guess !== secretNumber) {
    if (score > 1) {
      displayMessage(guess > secretNumber ? "Too high!" : "Too Low!");
      score--;
      numberScore(score);
    } else {
      displayMessage("You lose the game!");
    }
  }
});

// again button
document.querySelector(".again").addEventListener("click", function () {
  score = 20;
  numberScore(score);

  secretNumber = Math.trunc(Math.random() * 20) + 1;
  guessSecret("?");

  displayMessage("Start guessing...");

  guessNumber("");

  background("#222");
});
