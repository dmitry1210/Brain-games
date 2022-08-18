import readlineSync from 'readline-sync';
import { getRandomNumber, getOperator } from '../utilities.js';
import { greeting, askQuestion, gameRound } from '../index.js';

const calcGame = () => {
  console.log('What is the result of this expression?');

  const number1 = getRandomNumber();
  const number2 = getRandomNumber();
  const operator = getOperator();

  // askQuestion(`Question: ${number1} ${operator} ${number2}`);
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

  // const userAnswer = Number(readlineSync.question('Your answer: '));
  // gameRound(correctAnswer, userAnswer, userName);

  return [question, correctAnswer];
};

export default calcGame;
