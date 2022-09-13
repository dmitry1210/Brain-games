// export const getRandomNumber = () => Math.round(Math.random() * 10);
// export const getRandomNumber100 = () => Math.round(Math.random() * 100);

export const getRandomNumber = (min = 1, max = 10) => {
  const rand = min + Math.random() * (max - min);
  return Math.round(rand);
};

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
  if (n === 1 || n === 0) {
    return false;
  } if (n === 2) {
    return true;
  }
  for (let i = 2; i < n; i += 1) {
    if (n % i === 0) {
      return false;
    }
  }
  return true;
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

export const isEven = (number) => number % 2 === 0;

export const calculateExpression = (number1, operator, number2) => {
  let correctAnswer;
  switch (operator) {
    case '+':
      correctAnswer = number1 + number2;
      break;
    case '-':
      correctAnswer = number1 - number2;
      break;
    case '*':
      correctAnswer = number1 * number2;
      break;
    default:
    // do nothing
  }
  return correctAnswer;
};
