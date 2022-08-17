import readlineSync from 'readline-sync';

export const greeting = () => {
  console.log('Welcome to the Brain Games!');

  const userName = readlineSync.question('May I have your name? ');

  console.log(`Hello, ${userName}!`);

  return userName;
};

export const askQuestion = (question) => {
  console.log(`${question}`);
};
export const gameRound = (correctAnswer, userAnswer, userName) => {
  const maxRoundsWon = 3;
  let roundsCounter = 0;
  while (roundsCounter < maxRoundsWon) {
    if (correctAnswer === userAnswer) {
      console.log('Correct!');
      roundsCounter += 1;
    } else if (roundsCounter === maxRoundsWon) {
      console.log(`Congratulations, ${userName}!`);
    } else {
      console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.\nLet's try again, ${userName}!`);
      break;
    }
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
