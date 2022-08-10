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

export const getRandomNumber100 = () => {
    return Math.round(Math.random() * 100);
};

export const getNOD = (a, b) => {
    if (a !== 0) {
        const k = a % b;
        return getNOD(b, k);
    }
    return a;
};

export const getCorrectAnswer = (n) => {
    let correctAnswer;
    if (n === 1 || n === 0) {
        return correctAnswer = 'no';
    } else if ( n === 2) {
        return correctAnswer = 'yes';
    } else {
        for ( let i = 2; i < n; i++) {
            if (n % i === 0) {
                return correctAnswer = 'no';
            }
        }
        return correctAnswer = 'yes';
    }
};