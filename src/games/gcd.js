import readlineSync from 'readline-sync';
import { greeting, getRandomNumber100, getNOD } from '../index.js';

const gcdGame = () => {
  const userName = greeting();

  console.log('Find the greatest common divisor of given numbers.');

  const maxRoundsWon = 3;
  let roundsCounter = 0;
  while (roundsCounter < maxRoundsWon) {
    const number1 = getRandomNumber100();
    const number2 = getRandomNumber100();

    console.log(`Question: ${number1} ${number2}`);

    const corretAnswer = getNOD(number1, number2);

    // показываем правильный ответ для быстрого тестирования
    // console.log('CorrectAnswerCheck: ' + getNOD(number1, number2));

    const userAnswer = readlineSync.question('Your answer: ');

    if (corretAnswer == userAnswer) {
      console.log('Correct!');
      roundsCounter += 1;
    } else {
      console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${corretAnswer}'.\nLet's try again, ${userName}!`);
      break;
    }

    if (roundsCounter === maxRoundsWon) {
      console.log(`Congratulations, ${userName}!`);
    }
  }
};

export default gcdGame;
