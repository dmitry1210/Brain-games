import { getRandomNumber, getProgression } from '../utilities.js';
import { startGameRound } from '../index.js';

const gameRules = 'What number is missing in the progression?';
const startProgressionGame = () => {
  const firstNum = getRandomNumber();
  const increment = getRandomNumber();
  const randomIndex = getRandomNumber();
  const progressionRow = getProgression(firstNum, increment);
  const correctAnswer = progressionRow[randomIndex];
  progressionRow[randomIndex] = '..';
  const question = `${progressionRow.join(' ')}`;

  return [question, correctAnswer];
};

export default () => startGameRound(startProgressionGame, gameRules);
