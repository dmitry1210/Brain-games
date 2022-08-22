import readlineSync from 'readline-sync';

export const roundsNumber = 3;
export const gameRound = (roundData, gameRules) => {
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

    console.log(roundData);

    console.log(`Question: ${question}`);
    let userAnswer;
    if (typeof (correctAnswer) === 'number') {
      userAnswer = Number(readlineSync.question('Your answer: '));
    } else {
      userAnswer = (readlineSync.question('Your answer: '));
    }

    if (correctAnswer === userAnswer) {
      console.log('Correct!');
      roundsCounter += 1;
      i += 1;
    } else {
      console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.\nLet's try again, ${userName}!`);
      break;
    }
  }
  if (roundsCounter === roundsNumber) {
    console.log(`Congratulations, ${userName}!`);
  }
};

export function getNOD(x, y) {
  if ((typeof x !== 'number') || (typeof y !== 'number')) {
    return false;
  }
  x = Math.abs(x);
  y = Math.abs(y);
  while (y) {
    const t = y;
    y = x % y;
    x = t;
  }
  return x;
}

export const getCorrectAnswer = (n) => {
  let correctAnswer;
  if (n === 1 || n === 0) {
    correctAnswer = 'no';
    return correctAnswer;
  } if (n === 2) {
    correctAnswer = 'yes';
    return correctAnswer;
  }
  for (let i = 2; i < n; i += 1) {
    if (n % i === 0) {
      correctAnswer = 'no';
      return correctAnswer;
    }
  }
  correctAnswer = 'yes';
  return correctAnswer;
};
