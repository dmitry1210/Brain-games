import { getRandomNumber, isPrime } from '../utilities.js';
import { startGameRound } from '../index.js';

const gameRules = 'Answer "yes" if given number is prime. Otherwise answer "no"';
const startPrimeGame = () => {
  const number = getRandomNumber();
  const question = `${number}`;
  const correctAnswer = isPrime(number);

  return [question, correctAnswer];
};

export default () => startGameRound(startPrimeGame, gameRules);
