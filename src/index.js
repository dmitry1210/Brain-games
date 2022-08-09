import readlineSync from 'readline-sync';

export const greeting = () => {
    console.log('Welcome to the Brain Games!');

    const userName = readlineSync.question('May I have your name? ');
    
    console.log('Hello, ' + userName + '!');

    return userName; 
};

export const getRandomNumber = () => {
    return Math.round(Math.random() * 10);
};

export const getNOD = (a, b) => {
    if (a !== 0) {
        const k = a % b;
        return getNOD(b, k);
    }
    return a;
};