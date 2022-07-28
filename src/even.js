import readlineSync from 'readline-sync';

console.log('Welcome to the Brain Games!');

export const userName = readlineSync.question('May I have your name? ');

console.log('Hello, ' + userName + '!\nAnswer "yes" if the number is even, otherwise answer "no".');

const getRandomNumber = () => {
    const number = Math.round(Math.random() * 10);
    console.log('Question: ' + number);
}
getRandomNumber();

const userAnswer = readlineSync.question('Your answer: ');

const round = () => {
    let result;
    if (number % 2 === 0 && userAnswer === 'yes'){
        result = 'Correct!';
    } else {
        result = 'yes';
    }
    console.log(result);
};
round();