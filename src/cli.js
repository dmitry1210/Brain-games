import readlineSync from 'readline-sync';

console.log('Welcome to the Brain Games!');

export const userName = readlineSync.question('May I have your name? ');

console.log('Hello, ' + userName + '!');

// export const getUserName = () => {
//     const userName = readlineSync.question('May I have your name? ');
//     return userName;
// };

