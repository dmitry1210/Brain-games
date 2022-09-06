import { getRandomNumber, getOperator, getExpressionResult } from '../utilities.js';
import { startGameRound } from '../index.js';

const gameRules = 'What is the result of this expression?';
const startCalcGame = () => {
  // const roundData = [];
  const getRoundData = () => {
    const number1 = getRandomNumber();
    const number2 = getRandomNumber();
    const operator = getOperator();
    const question = `${number1} ${operator} ${number2}`;
    const correctAnswer = getExpressionResult(number1, operator, number2);

    // roundData.push(question, correctAnswer);
    return [question, correctAnswer];
  };
  startGameRound(getRoundData(), gameRules);
};

export default startCalcGame;
