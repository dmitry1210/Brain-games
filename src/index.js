import readlineSync from 'readline-sync';

export const roundsNumber = 3;
export const startGameRound = (roundData, gameRules) => {
  console.log('Welcome to the Brain Games!');
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!`);

  console.log(gameRules);

  let roundsCounter = 0;
  let i = 0;
  const j = 0;
  const k = 1;
  while (roundsCounter < roundsNumber) {
    const question = roundData[i][j];
    const correctAnswer = roundData[i][k];

    // показываем правильный ответ для быстрого тестирования
    // console.log(roundData);

    console.log(`Question: ${question}`);

    const userAnswer = (readlineSync.question('Your answer: '));

    if (String(correctAnswer) !== userAnswer) {
      console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.\nLet's try again, ${userName}!`);
      break;
    }

    console.log('Correct!');
    roundsCounter += 1;
    i += 1;
  }

  if (roundsCounter === roundsNumber) {
    console.log(`Congratulations, ${userName}!`);
  }
};
