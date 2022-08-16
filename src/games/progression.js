import readlineSync from 'readline-sync';
import { greeting, getRandomNumber } from '../index.js';

const progressionGame = () => {
  const userName = greeting();

  console.log('What number is missing in the progression?');

  const maxRoundsWon = 3;
  let roundsCounter = 0;
  while (roundsCounter < maxRoundsWon) {
    const firstNum = getRandomNumber();
    const increment = getRandomNumber();
    let newNum = firstNum + increment;
    const randomIndex = getRandomNumber();

    const getProgression = () => {
      const result = [];
      result.push(firstNum);

      for (let i = 1; i < 10; i += 1) {
        result.push(newNum);
        newNum += increment;
      }
      return result;
    };

    const progressionRow = getProgression();

    const correctAnswer = progressionRow[randomIndex];

    delete progressionRow[randomIndex];
    progressionRow[randomIndex] = '..';

    console.log(`Question: ${progressionRow.join(' ')}`);

    // показываем правильный ответ для быстрого тестирования
    // console.log('CorrectAnswerCheck: ' + correctAnswer);

    const userAnswer = readlineSync.question('Your answer: ');

    if (correctAnswer == userAnswer) {
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

export default progressionGame;
