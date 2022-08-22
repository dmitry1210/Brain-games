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
