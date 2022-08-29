import readlineSync from 'readline-sync';

export const roundsNumber = 3;
export const startGameRound = (roundData, gameRules) => {
  console.log('Welcome to the Brain Games!');
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!`);

  console.log(gameRules);

  /* eslint no-restricted-syntax: ["off", "ForOfStatement"] */
  for (const [question, correctAnswer] of roundData) {
    // показываем правильный ответ для быстрого тестирования
    // console.log(roundData);

    console.log(`Question: ${question}`);

    const userAnswer = (readlineSync.question('Your answer: '));

    if (String(correctAnswer) === userAnswer) {
      console.log('Correct!');
    } else {
      console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.\nLet's try again, ${userName}!`);
      break;
    }
    console.log(`Congratulations, ${userName}!`);
  }
};
