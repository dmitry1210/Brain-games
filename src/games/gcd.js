import { getRandomNumber, getNOD } from '../utilities.js';
import { startGameRound } from '../index.js';

const gameRules = 'Find the greatest common divisor of given numbers.';
const startGCDGame = () => {
  const number1 = getRandomNumber(1, 100);
  const number2 = getRandomNumber(1, 100);
  const question = `${number1} ${number2}`;
  const correctAnswer = getNOD(number1, number2);

  return [question, correctAnswer];
};

export default () => startGameRound(startGCDGame, gameRules);
