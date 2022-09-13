import readlineSync from 'readline-sync';

export const roundsNumber = 3;
export const startGameRound = (getRoundData, gameRules) => {
  console.log('Welcome to the Brain Games!');
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!`);

  console.log(gameRules);

  for (let i = 0; i < roundsNumber; i += 1) {
    const [question, correctAnswer] = getRoundData();

    console.log(`Question: ${question}`);

    const userAnswer = (readlineSync.question('Your answer: '));

    if (String(correctAnswer) !== userAnswer) {
      console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.\nLet's try again, ${userName}!`);
      return;
    }
    console.log('Correct!');
  }
  console.log(`Congratulations, ${userName}!`);
};
