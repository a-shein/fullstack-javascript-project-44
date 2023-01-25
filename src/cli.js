import readlineSync from 'readline-sync';

function makeWelcome() {
  console.log('Welcome to the Brain Games!');
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!`);
}

export default makeWelcome;
