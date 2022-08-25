import { getRandomNumber, getOperator } from '../utilities.js';
import { roundsNumber, gameRound } from '../index.js';

const startCalcGame = () => {
  const gameRules = 'What is the result of this expression?';
  let roundsCounter = 0;
  const roundData = [];
  const getRoundData = () => {
    while (roundsCounter < roundsNumber) {
      const number1 = getRandomNumber();
      const number2 = getRandomNumber();
      const operator = getOperator();

      const question = `${number1} ${operator} ${number2}`;

      let correctAnswer;
      switch (operator) {
        case '+':
          correctAnswer = number1 + number2;
          break;
        case '-':
          correctAnswer = number1 - number2;
          break;
        case '*':
          correctAnswer = number1 * number2;
          break;
        default:
        // do nothing
      }
      roundData.push([question, correctAnswer]);
      roundsCounter += 1;
    }
    return roundData;
  };
  gameRound(getRoundData(), gameRules);
};

export default startCalcGame;
