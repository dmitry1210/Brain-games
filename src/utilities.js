export const getRandomNumber = () => Math.round(Math.random() * 10);
export const getRandomNumber100 = () => Math.round(Math.random() * 100);

const operatorsArr = ['+', '-', '*'];
export const getOperator = () => operatorsArr[Math.floor(Math.random() * operatorsArr.length)];
