'use strict';

let highScore = 0;
let score = 20;
let randomNumber = Math.floor(Math.random() * 20) + 1;
console.log(randomNumber);

const setScore = score => {
  document.querySelector('.score').textContent = score;
};

const setMessage = message => {
  document.querySelector('.message').textContent = message;
};

const setBackgroundColor = () => {
  document.querySelector('body').classList.toggle('bg-green');
};

document.querySelector('.check').addEventListener('click', function () {
  const guess = document.querySelector('.guess').value;
  if (!guess) {
    setMessage('No number!');
  } else if (guess < randomNumber) {
    setMessage('📉 Too low!');
    setScore(--score);
  } else if (guess > randomNumber) {
    setMessage('📈 Too High!');
    setScore(--score);
  } else {
    setMessage('🥳 Correct number');
    setBackgroundColor();
    document.querySelector('.number').textContent = randomNumber;
    if (score > highScore) {
      document.querySelector('.highscore').textContent = score;
      highScore = score;
    }
  }
});

document.querySelector('.again').addEventListener('click', () => {
  score = 20;
  setScore(score);
  setBackgroundColor();
  setMessage('Start guessing...');
  document.querySelector('.number').textContent = '?';
  randomNumber = Math.floor(Math.random() * 20) + 1;
  console.log(randomNumber);
});
