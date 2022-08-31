import { getRandomNumber, getOperator, getExpressionResult } from '../utilities.js';
import { roundsNumber, startGameRound } from '../index.js';

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
      const correctAnswer = getExpressionResult(number1, operator, number2);

      roundData.push([question, correctAnswer]);
      roundsCounter += 1;
    }
    return roundData;
  };
  startGameRound(getRoundData(), gameRules);
};

export default startCalcGame;
