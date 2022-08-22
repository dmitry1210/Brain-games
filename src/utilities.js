export const getRandomNumber = () => Math.round(Math.random() * 10);
export const getRandomNumber100 = () => Math.round(Math.random() * 100);

const operatorsArr = ['+', '-', '*'];
export const getOperator = () => operatorsArr[Math.floor(Math.random() * operatorsArr.length)];

export const getNOD = (x, y) => {
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
};

export const isPrime = (n) => {
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
