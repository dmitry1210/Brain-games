import { getRandomNumber, isEven } from '../utilities.js';
import { startGameRound } from '../index.js';

const gameRules = 'Answer "yes" if the number is even, otherwise answer "no".';
const startEvenGame = () => {
  const number = getRandomNumber();
  const question = `${number}`;
  const correctAnswer = isEven(number) ? 'yes' : 'no';

  return [question, correctAnswer];
};

export default () => startGameRound(startEvenGame, gameRules);
