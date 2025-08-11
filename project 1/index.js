// random gessing game + time limit + attempts
// youssef
// 11/08/2025

window.onload = function() {
    const min = 1;
const max = 100;
let secretnumber = Math.floor(Math.random() * (max - min) + min);
let attempts = 5;
let timeLeft = 30;
let timer;

const guess = document.getElementById("guess");
const submit = document.getElementById("submit");
const reset = document.getElementById("reset");
const message = document.getElementById("message");

// Start countdown
function startTimer() {
  timer = setInterval(() => {
    timeLeft--;
    message.textContent = `Time left: ${timeLeft}s | Attempts left: ${attempts}`;
    if (timeLeft <= 0) {
      clearInterval(timer);
      endGame(" Time's up! You lost.");
    }
  }, 1000);
}

// End game
function endGame(text) {
  message.textContent = text;
  submit.disabled = true;
  guess.disabled = true;
}

// Handle guess
submit.onclick = function () {
  if (attempts <= 0 || timeLeft <= 0) return;

  let userguess = Number(guess.value);
  attempts--;

  if (userguess === secretnumber) {
    clearInterval(timer);
    endGame(" Congrats! You guessed the number!");
  } else if (userguess < secretnumber) {
    message.textContent = `Too low! Time left: ${timeLeft}s | Attempts left: ${attempts}`;
  } else {
    message.textContent = `Too high! Time left: ${timeLeft}s | Attempts left: ${attempts}`;
  }

  if (attempts === 0) {
    clearInterval(timer);
    endGame(" Out of attempts! You lost.");
  }
};

// Reset game
reset.onclick = function () {
  secretnumber = Math.floor(Math.random() * (max - min) + min);
  attempts = 5;
  timeLeft = 30;
  guess.value = "";
  message.textContent = "";
  submit.disabled = false;
  guess.disabled = false;
  clearInterval(timer);
  startTimer();
};

// Start the game on load
startTimer();

};
