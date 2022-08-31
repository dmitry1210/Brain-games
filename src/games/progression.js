import { getRandomNumber, getProgression } from '../utilities.js';
import { roundsNumber, startGameRound } from '../index.js';

const gameRules = 'What number is missing in the progression?';
const startProgressionGame = () => {
  let roundsCounter = 0;
  const roundData = [];
  const getRoundData = () => {
    while (roundsCounter < roundsNumber) {
      const firstNum = getRandomNumber();
      const increment = getRandomNumber();
      const randomIndex = getRandomNumber();
      const progressionRow = getProgression(firstNum, increment);
      const correctAnswer = progressionRow[randomIndex];
      progressionRow[randomIndex] = '..';

      const question = `${progressionRow.join(' ')}`;

      roundData.push([question, correctAnswer]);
      roundsCounter += 1;
    }
    return roundData;
  };
  startGameRound(getRoundData(), gameRules);
};

export default startProgressionGame;
