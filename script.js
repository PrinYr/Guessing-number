"use strict";
// random num 1 to 20
const secretNumber = Math.trunc(Math.random() * 20) + 1;

let score = 20;

document.querySelector(".check").addEventListener("click", function () {
  const guess = Number(document.querySelector(".guess").value);
  console.log(guess, typeof guess);

  // no input
  if (!guess) {
    document.querySelector(".message").textContent = "No number";
    // win
  } else if (guess === secretNumber) {
    document.querySelector(".message").textContent = "Correct Number!";

    document.querySelector("body").style.backgroundColor = "#60b347";
    document.querySelector(".number").textContent = secretNumber;

    // num too high
  } else if (guess > secretNumber) {
    if (score > 1) {
      document.querySelector(".message").textContent = "Too high!";
      score--;
      document.querySelector(".score").textContent = score;
    } else {
      document.querySelector(".message").textContent = "You lose the game!";
    }
    // num too low
  } else if (guess < secretNumber) {
    if (score > 1) {
      document.querySelector(".message").textContent = "Too Low!";
      score--;
      document.querySelector(".score").textContent = score;
    } else {
      document.querySelector(".message").textContent = "You lose the game!";
    }
  }
});
