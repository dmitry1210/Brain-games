import { getRandomNumber, calculateExpression } from '../utilities.js';
import { startGameRound } from '../index.js';

const gameRules = 'What is the result of this expression?';
const startCalcGame = () => {
  const operatorsArr = ['+', '-', '*'];
  const getOperator = () => operatorsArr[Math.floor(Math.random() * operatorsArr.length)];
  const number1 = getRandomNumber();
  const number2 = getRandomNumber();
  const operator = getOperator();

  const question = `${number1} ${operator} ${number2}`;
  const correctAnswer = calculateExpression(number1, operator, number2);

  return [question, correctAnswer];
};

export default () => startGameRound(startCalcGame, gameRules);
