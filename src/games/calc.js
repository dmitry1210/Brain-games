import { getRandomNumber, getOperator } from '../utilities.js';
import { gameRound } from '../index.js';

const calcGame = () => {
  const gameRules = 'What is the result of this expression?';
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

  // return [question, correctAnswer];
  const roundData = [question, correctAnswer];
  gameRound(roundData, gameRules);
  return roundData;
};

export default calcGame;
