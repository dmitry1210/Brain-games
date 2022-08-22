export const getRandomNumber = () => Math.round(Math.random() * 10);
export const getRandomNumber100 = () => Math.round(Math.random() * 100);

const operatorsArr = ['+', '-', '*'];
export const getOperator = () => operatorsArr[Math.floor(Math.random() * operatorsArr.length)];

export const getNOD = (a, b) => {
  if ((typeof a !== 'number') || (typeof b !== 'number')) {
    return false;
  }
  let x = Math.abs(a);
  let y = Math.abs(b);
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

export const getProgression = (a, b) => {
  let x = a;
  const result = [];
  result.push(a);
  for (let i = 1; i < 10; i += 1) {
    x += b;
    result.push(x);
  }
  return result;
};
