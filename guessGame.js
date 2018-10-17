const guessNumber = 15;

const userGuess = prompt('Tell me a number');

if (userGuess < guessNumber) {
  console.log(' Your number is less than the guess number');
} else if (userGuess > guessNumber) {
  console.log(' Your number is up to the guess number');
} else {
  console.log('Vous avez gagné');
}
