import readlineSync from 'readline-sync';
import { greeting, getRandomNumber, getCorrectAnswer } from '../index.js';

const primeGame = () => {
  const userName = greeting();

  console.log('Answer "yes" if given number is prime. Otherwise answer "no".');

  const maxRoundsWon = 3;
  let roundsCounter = 0;
  while (roundsCounter < maxRoundsWon) {
    const number = getRandomNumber();

    console.log(`Question: ${number}`);

    const correctAnswer = getCorrectAnswer(number);

    // показываем правильный ответ для быстрого тестирования
    // console.log('CorrectAnswerCheck: ' + getCorrectAnswer(number));

    const userAnswer = readlineSync.question('Your answer: ');

    if (correctAnswer === userAnswer) {
      console.log('Correct!');
      roundsCounter += 1;
    } else {
      console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.\nLet's try again, ${userName}!`);
      break;
    }

    if (roundsCounter === maxRoundsWon) {
      console.log(`Congratulations, ${userName}!`);
    }
  }
};

export default primeGame;
