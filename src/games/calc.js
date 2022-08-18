import readlineSync from 'readline-sync';
import { getRandomNumber, getOperator } from '../utilities.js';
import { gameRound } from '../index.js';

const calcGame = () => {
  let roundData;
  const gameRules = 'What is the result of this expression?';

  gameRound(roundData, gameRules);

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

  // gameRound(correctAnswer, userAnswer, userName);

  return [question, correctAnswer];
};

export default calcGame;
