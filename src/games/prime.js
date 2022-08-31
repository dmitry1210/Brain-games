import { getRandomNumber, isPrime } from '../utilities.js';
import { roundsNumber, startGameRound } from '../index.js';

const gameRules = 'Answer "yes" if given number is prime. Otherwise answer "no"';
const startPrimeGame = () => {
  let roundsCounter = 0;
  const roundData = [];
  const getRoundData = () => {
    while (roundsCounter < roundsNumber) {
      const number = getRandomNumber();
      const question = `${number}`;
      const correctAnswer = isPrime(number);

      roundData.push([question, correctAnswer]);
      roundsCounter += 1;
    }
    return roundData;
  };
  startGameRound(getRoundData(), gameRules);
};

export default startPrimeGame;
